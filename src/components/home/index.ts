import type { Links } from "./types";

/* @ts-ignore */
export { default as Home } from "./component.astro";

export const links: Links = [
  { href: "introduction", text: "introduction" },
  { href: "flexbox", text: "flexbox" },
  { href: "grids", text: "grids" },
  { href: "subgrid", text: "subgrid" },
  { href: "center-an-element", text: "center an element" },
  { href: "position", text: "position" },
  { href: "transition", text: "transition" },
  { href: "focus-within", text: ":focus-within" },
  { href: "accent-color", text: "accent-color" },
  { href: "text-underline", text: "text underline" },
  { href: "mask-image", text: "mask-image" },
  { href: "popover", text: "popover" },
  { href: "css-anchor-positioning", text: "css anchor positioning" },
  { href: "img", text: `<img>` },
  { href: "details", text: `<details>` },
  { href: "dialog", text: `<dialog>` },
  { href: "variable-fonts", text: "variable fonts" },
];
