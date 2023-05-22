import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "/denene",
  trailingSlash: "always",
  scopedStyleStrategy: "class",
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[hash][extname]",
        },
      },
    },
  },
});
