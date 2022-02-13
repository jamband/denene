import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    browser: {
      router: dev || false,
      hydrate: dev || false,
    },
    inlineStyleThreshold: 1024,
    trailingSlash: "always",
  },
};

export default config;
