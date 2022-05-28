import { fileURLToPath, URL } from "url";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetUno(), presetAttributify()],
    }),
    vue(),
    Pages({
      dirs: "src/views",
      extensions: ["vue", "md"],
    }),
    Layouts(),
  ],
  test: {
    environment: "jsdom",
    reporters: "verbose",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    deps: {
      inline: ["vee-validate", "nanoid"],
    },
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["vue"],
  },
});
