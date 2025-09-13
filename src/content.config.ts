import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    coverImage: z.string().optional(), 
	description: z.string(), 
  }),
});

export const collections = {
  posts,
};
