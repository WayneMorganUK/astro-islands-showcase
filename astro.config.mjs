import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { vitePreprocess } from "@astrojs/svelte";
import isDev from "isdev"

import vue from "@astrojs/vue";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    vue(),
    svelte({
        emitCss: true,
        compilerOptions: { dev: isDev, hydratable: true },
        preprocess: vitePreprocess()
      })
    ],
    emitCss: true,

});

