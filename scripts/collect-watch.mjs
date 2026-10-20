import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const root = new URL('..', import.meta.url).pathname;
const inbox = join(root, 'veille', 'inbox');
const today = new Date().toISOString().slice(0, 10);
const cutoff = Date.now() - 3 * 24 * 60 * 60 * 1000;
const decode = (value = '') => value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const field = (entry, name) => decode(entry.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]);
const href = (entry) => entry.match(/<link[^>]+href="([^"]+)"/)?.[1];
const run = promisify(execFile);

await mkdir(inbox, { recursive: true });
const sources = JSON.parse(await readFile(join(root, 'veille', 'sources.json'), 'utf8'));
const previous = await readdir(inbox).catch(() => []);
const known = new Set();
for (const file of previous.filter(file => file.endsWith('.md'))) {
  const body = await readFile(join(inbox, file), 'utf8');
  for (const url of body.matchAll(/https:\/\/github\.com\/[^\s)]+/g)) known.add(url[0]);
}

const signals = [];
for (const source of sources) {
  try {
    const { stdout: xml } = await run('curl', ['--fail', '--location', '--silent', '--show-error', source.feed], { maxBuffer: 5 * 1024 * 1024 });
    let accepted = 0;
    for (const entry of xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? []) {
      const url = href(entry);
      const updated = field(entry, 'updated');
      const title = field(entry, 'title');
      const age = Date.parse(updated);
      const noisy = /nightly|^b\d+(?=[:\s]|$)|^cmd\/|(?:[-.]|\d)(?:rc|beta|alpha|b)\d*/i.test(title);
      if (!url || known.has(url) || noisy || !Number.isFinite(age) || age < cutoff || accepted >= 3) continue;
      const rawSummary = field(entry, 'content') || field(entry, 'summary');
      const summary = rawSummary.length > 800 ? `${rawSummary.slice(0, 800)}…` : rawSummary;
      signals.push({ source: source.name, theme: source.theme, title, url, updated, summary });
      accepted += 1;
    }
  } catch (error) {
    signals.push({ source: source.name, theme: source.theme, error: error.message });
  }
}

const destination = join(inbox, `${today}.md`);
const existing = await readFile(destination, 'utf8').catch(() => '');
if (existing && signals.length === 0) {
  console.log('No new signals; keeping the existing inbox file unchanged.');
  process.exit(0);
}
const lines = existing ? [existing.trim(), ''] : [
  `# Inbox de veille — ${today}`,
  '',
  '> Collecte automatique de releases officielles. Ces signaux ne sont pas des articles, ne sont pas analysés, et ne doivent pas être publiés tels quels.',
  '',
];
for (const signal of signals.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''))) {
  if (signal.error) {
    lines.push(`- **${signal.source}** (${signal.theme}) — collecte impossible : ${signal.error}`);
    continue;
  }
  lines.push(`## ${signal.title}`, '', `- **Source :** ${signal.source}`, `- **Thème :** ${signal.theme}`, `- **Date de mise à jour :** ${signal.updated || 'non indiquée'}`, `- **URL :** ${signal.url}`, signal.summary ? `- **Résumé brut :** ${signal.summary}` : '', '- **Décision éditoriale :** à qualifier', '');
}
if (!existing && signals.length === 0) lines.push('Aucun nouveau signal détecté.');
await writeFile(destination, `${lines.filter(Boolean).join('\n')}\n`);
console.log(`Collected ${signals.length} signal(s) into veille/inbox/${today}.md`);
