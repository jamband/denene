import { dev } from "$app/environment";
import type { PrerenderOption } from "@sveltejs/kit";

export const csr = dev ? true : false;
export const prerender: PrerenderOption = true;
