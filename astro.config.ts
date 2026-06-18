import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://jamband.github.io/",
  base: "denene/",
  trailingSlash: "always",
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  fonts: [
    {
      name: "Ubuntu",
      cssVariable: "--font-ubuntu",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
    },
    {
      name: "Ubuntu Mono",
      cssVariable: "--font-ubuntu-mono",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
    },
  ],
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
  },
});
