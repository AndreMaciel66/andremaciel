import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), svelte()]
});