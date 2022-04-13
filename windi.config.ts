import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

export default defineConfig({
  darkMode: "class",
  plugins: [formsPlugin],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A1E2F5",
          200: "#6FD0EC",
          300: "#48C1E3",
          400: "#25B0D7",
          500: "#069BC5",
        },
        accent: {
          100: "#FFD2A5",
          200: "#FFBA73",
          300: "#FFA64B",
          400: "#FF9324",
          500: "#FF8100",
        },
      },
    },
  },
  safelist: [
    range(12).map((i) => `grid-cols-${i}`),
    range(12).map((i) => `sm:grid-cols-${i}`),
    range(12).map((i) => `md:grid-cols-${i}`),
    range(12).map((i) => `lg:grid-cols-${i}`),
    range(12).map((i) => `xl:grid-cols-${i}`),
    range(12).map((i) => `2xl:grid-cols-${i}`),
    range(12).map((i) => `col-span-${i}`),
    range(12).map((i) => `sm:col-span-${i}`),
    range(12).map((i) => `md:col-span-${i}`),
    range(12).map((i) => `lg:col-span-${i}`),
    range(12).map((i) => `xl:col-span-${i}`),
    range(12).map((i) => `2xl:col-span-${i}`),
    "gap-0 gap-px gap-0.5 gap-1 gap-1.5 gap-2 gap-2.5 gap-3 gap-3.5 gap-4",
  ],
});
