import { defineConfig } from "windicss/helpers";
import ratioPlugin from "windicss/plugin/aspect-ratio";
import typography from "windicss/plugin/typography";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

export default defineConfig({
  darkMode: "class",
  plugins: [ratioPlugin, typography],
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
        secondary: {
          100: "#AAB9F7",
          200: "#7C93EF",
          300: "#5874E7",
          400: "#3657DD",
          500: "#1539CE",
        },
        warning: {
          100: "#FFD69B",
          200: "#FFC570",
          300: "#FFB64D",
          400: "#EE9C24",
          500: "#BD750D",
        },
        error: {
          100: "#FF8F86",
          200: "#FF685C",
          300: "#F44436",
          400: "#D81E0F",
          500: "#A90F03",
        },
        info: {
          100: "#80D4F8",
          200: "#29B8F6",
          300: "#29B8F6",
          400: "#09ACF2",
          500: "#0290CD",
        },
        success: {
          100: "#C3E9C5",
          200: "#94D598",
          300: "#66BB6C",
          400: "#3D9B43",
          500: "#207E26",
        },
        dark: {
          base: "#002233",
          darkest: "#00141f",
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
  shortcuts: {
    "gradient-to-b": "bg-gradient-to-b from-primary-300 to-secondary-300",
    "gradient-to-t": "bg-gradient-to-t from-primary-300 to-secondary-300",
    "gradient-to-r": "bg-gradient-to-r from-primary-300 to-secondary-300",
  },
});
