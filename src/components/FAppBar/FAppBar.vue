<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import "./FAppBar.sass";

type FAppBarVariants = "default" | "primary" | "accent" | "transparent";
const props = defineProps({
  title: { type: String, default: "My awesome app" },
  fixed: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
  variant: { type: String as PropType<FAppBarVariants>, default: "default" },
});
const classes = computed(() => ({
  "f-app-bar--fixed": props.fixed,
  "f-app-bar--primary": props.variant === "primary",
  "f-app-bar--accent": props.variant === "accent",
  "f-app-bar--transparent": props.variant === "transparent",
  "f-app-bar--dark": props.dark,
}));
</script>

<template>
  <nav class="f-app-bar" :class="classes">
    <span class="font-semibold text-primary text-lg mr-4">{{ title }}</span>
    <div>
      <slot />
    </div>
  </nav>
</template>
