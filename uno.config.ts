import { defineConfig, transformerDirectives } from "unocss";

import theme from "./uno-theme";
import safelist from "./uno-safelist";

export default defineConfig({
  transformers: [transformerDirectives()],
  theme,
  safelist,
  shortcuts: {
    "gradient-to-b": "bg-gradient-to-b from-primary-300 to-secondary-300",
    "gradient-to-t": "bg-gradient-to-t from-primary-300 to-secondary-300",
    "gradient-to-r": "bg-gradient-to-r from-primary-300 to-secondary-300",
  },
});
