import { getCollection } from 'astro:content';

export const domains = {
  'data-engineering': 'Data Engineering',
  'analytics-engineering': 'Analytics Engineering',
  'ai-engineering': 'AI Engineering',
  'data-architecture': 'Data Architecture',
} as const;

export const label = (value: string) => domains[value as keyof typeof domains] ?? value;
export const date = (value: Date) => new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(value);
export const allContent = async () => Promise.all([getCollection('articles'), getCollection('news'), getCollection('exercises')]);
