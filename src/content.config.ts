import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const common = z.object({
  title: z.string(),
  description: z.string(),
  domain: z.enum(['data-engineering', 'analytics-engineering', 'ai-engineering', 'data-architecture']),
  technology: z.string(),
  tags: z.array(z.string()).default([]),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  relatedArticles: z.array(z.string()).default([]),
});

const articles = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }), schema: common.extend({ difficulty: z.enum(['beginner', 'intermediate', 'advanced']), prerequisites: z.array(z.string()).default([]), exercises: z.array(z.string()).default([]) }) });
const news = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }), schema: common.extend({ source: z.object({ title: z.string(), url: z.string().url() }), originalPublishedAt: z.coerce.date(), isDemo: z.boolean().default(true) }) });
const exercises = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/exercises' }), schema: common.extend({ correction: z.string(), expected: z.array(z.string()), scenario: z.string() }) });

export const collections = { articles, news, exercises };
