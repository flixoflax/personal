import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeTitleFigure from "rehype-title-figure";
import vercel from '@astrojs/vercel/static';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()],
  markdown: {
    rehypePlugins: [rehypeTitleFigure],
    extendDefaultPlugins: true
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});