<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import "./FButton.sass";

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
