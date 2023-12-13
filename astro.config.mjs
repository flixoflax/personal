import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeTitleFigure from "rehype-title-figure";
import vercel from '@astrojs/vercel/serverless';

import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  markdown: {
    rehypePlugins: [rehypeTitleFigure],
    extendDefaultPlugins: true
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});