// @ts-check
import { defineConfig } from 'astro/config';

import dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: 'https://ctrujillo.netlify.app', // ← Replace with your actual deployed site URL
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
});