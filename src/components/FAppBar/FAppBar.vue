<script setup lang="ts">
import type { PropType } from "vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { computed } from "vue";
import "./FAppBar.sass";

type FAppBarVariants = "default" | "primary" | "accent" | "transparent";
const props = defineProps({
  title: { type: String, default: "My awesome app" },
  fixed: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
  variant: { type: String as PropType<FAppBarVariants>, default: "default" },
});
const scrollPosition = ref<number>(0);

const updateScroll = () => {
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
});

const classes = computed(() => ({
  "f-app-bar--fixed": props.fixed,
  "f-app-bar--primary": props.variant === "primary",
  "f-app-bar--accent": props.variant === "accent",
  "f-app-bar--transparent": props.variant === "transparent",
  "f-app-bar--dark": props.dark,
  "f-app-bar-scrolled": scrollPosition.value > 56,
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
