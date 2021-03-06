import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    browser: {
      router: dev || false,
      hydrate: dev || false,
    },
    inlineStyleThreshold: 1024,
    paths: {
      base: process.env["VITE_GITHUB_ACTIONS"] ? "/denene" : "",
    },
    prerender: {
      default: true,
    },
    trailingSlash: "always",
  },
};

export default config;
