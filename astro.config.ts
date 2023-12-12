import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "denene/",
  trailingSlash: "always",
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
  },
});
