import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "denene/",
  trailingSlash: "always",
  integrations: [sitemap()],
});
