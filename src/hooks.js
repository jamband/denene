import { prerendering } from "$app/env";
import { minify } from "html-minifier-terser";

export const handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  if (prerendering && response.headers.get("content-type") === "text/html") {
    const body = await minify(await response.text(), {
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

    return new Response(body, {
      status: response.status,
      headers: response.headers,
    });
  }

  return response;
};
