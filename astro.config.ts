import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import htmlMinify from "./integrations/html-minify";

export default defineConfig({
  site: "https://jamband.github.io",
  base: "/denene",
  trailingSlash: "always",
  integrations: [htmlMinify(), sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/app.[hash][extname]",
        },
      },
    },
  },
});
