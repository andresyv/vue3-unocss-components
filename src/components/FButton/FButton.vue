<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

type FButtonVariants =
  | "default"
  | "gradient"
  | "primary"
  | "warning"
  | "error"
  | "info"
  | "success";

const props = defineProps({
  color: { type: String as PropType<FButtonVariants>, default: "default" },
  flat: { type: Boolean, default: false },
  text: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
});

const classes = computed(() => ({
  "f-button--default": props.color === "default",
  "f-button--gradient": props.color === "gradient",
  "f-button--primary": props.color === "primary",
  "f-button--success": props.color === "success",
  "f-button--info": props.color === "info",
  "f-button--error": props.color === "error",
  "f-button--warning": props.color === "warning",
  "f-button--text": props.text,
  "f-button--outline": props.outline,
  "f-button--rounded": props.rounded,
  "!shadow-none": props.flat,
  "w-full": props.block,
}));
</script>

<template>
  <button class="f-button" :class="classes">
    <slot />
  </button>
</template>

<style lang="sass" scoped>
.f-button
  @apply rounded text-sm font-base py-1 px-4 uppercase
  &.f-button--default
    @apply bg-gray-200 hover:bg-gray-300 shadow dark:bg-dark
  &.f-button--text
    @apply bg-transparent shadow-none hover:bg-black hover:bg-opacity-10
  &.f-button--gradient
    @apply gradient-to-r hover:bg-primary-300 shadow text-white hover:bg-primary-300
  &.f-button--primary
    @apply bg-primary-300 hover:bg-primary-400 shadow text-white
    &.f-button--outline
      @apply bg-opacity-10 hover:bg-opacity-20 text-primary-400 shadow-none border border-primary-400
  &.f-button--warning
    @apply bg-warning-300 hover:bg-warning-400 shadow text-white
    &.f-button--outline
      @apply bg-opacity-10 hover:bg-opacity-20 text-warning-400 shadow-none border border-warning-400
  &.f-button--error
    @apply bg-error-300 hover:bg-error-400 shadow text-white
    &.f-button--outline
      @apply bg-opacity-10 hover:bg-opacity-20 text-error-400 shadow-none border border-error-400
  &.f-button--info
    @apply bg-info-300 hover:bg-info-400 shadow text-white
    &.f-button--outline
      @apply bg-opacity-10 hover:bg-opacity-20 text-info-400 shadow-none border border-info-400
  &.f-button--success
    @apply bg-success-300 hover:bg-success-400 shadow text-white
    &.f-button--outline
      @apply bg-opacity-10 hover:bg-opacity-20 text-success-400 shadow-none border border-success-400
  &.f-button--rounded
    @apply rounded-full
</style>
