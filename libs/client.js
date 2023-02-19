import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'blog-samle-next',
  apiKey: process.env.API_KEY,
});
