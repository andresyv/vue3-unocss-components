<script setup lang="ts">
import type { PropType } from "vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { computed } from "vue";

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

<style lang="sass" scoped>
.f-app-bar
  @apply px-4 py-3
.f-app-bar--fixed
  @apply fixed top-0 inset-x-0 z-50 h-14 flex justify-between items-center
.f-app-bar-scrolled
  @apply shadow-md bg-white dark:bg-dark-darkest text-slate-700 dark:text-white
.f-app-bar--default
  @apply bg-white text-slate-700
.f-app-bar--primary
  @apply bg-primary-300 text-white
.f-app-bar--accent
  @apply bg-accent-300 text-white
.f-app-bar--transparent
  @apply bg-transparent dark:bg-transparent
.f-app-bar--dark
  @apply bg-[#001b29] text-white
</style>
