import type { AstroIntegration } from "astro";
import { minify } from "html-minifier-terser";
import { readFileSync, writeFileSync } from "node:fs";

export default function htmlMinify(): AstroIntegration {
  const name = "html-minify";

  return {
    name,
    hooks: {
      "astro:build:done": async ({ routes }) => {
        for (const route of routes) {
          const path = route.distURL!.pathname;

          const data = await minify(readFileSync(path, "utf8"), {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            decodeEntities: true,
            ignoreCustomComments: [/^#/],
            minifyCSS: true,
            minifyJS: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeOptionalTags: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true,
            sortClassName: true,
          });

          writeFileSync(path, data, "utf8");
        }

        console.log(`\x1b[32m${name}:\x1b[0m completed.`);
      },
    },
  };
}
