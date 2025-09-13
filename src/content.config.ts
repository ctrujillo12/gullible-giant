import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),   // can also use z.date() if you want date object
  })
});

export const collections = {
  posts: postsCollection
};
