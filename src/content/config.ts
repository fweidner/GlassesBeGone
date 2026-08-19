import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bans = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bans' }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      'business',
      'authority',
      'education',
      'event',
      'region',
    ]),
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
    address: z.string().optional(),
    banDate: z.coerce.date().optional(),
    sourceUrl: z.string().url(),
    sourceName: z.string().optional(),
  }),
});

export const collections = { bans };
