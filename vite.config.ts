import { fileURLToPath, URL } from "url";
import WindiCSS from "vite-plugin-windicss";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), vue()],
  test: {
    environment: "jsdom",
    reporters: "verbose",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    deps: {
      inline: ["vee-validate"],
    },
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
