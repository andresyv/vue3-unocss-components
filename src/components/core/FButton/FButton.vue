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
  icon: { type: Boolean, default: false },
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
  "f-button--icon": props.icon,
  "!shadow-none": props.flat,
  "w-full": props.block,
}));
</script>

<template>
  <button class="f-button" :class="classes" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
.f-button {
  --at-apply: "rounded text-sm font-base py-1 px-4 uppercase";
}
.f-button--icon {
  --at-apply: "flex justify-center items-center rounded-full !bg-transparent !dark:bg-transparent !dark:hover:bg-dark-darkest !hover:bg-gray-100 !shadow-none !p-2 w-10 h-10";
}
.f-button--default {
  --at-apply: "bg-gray-200 hover:bg-gray-300 shadow dark:bg-dark";
}
.f-button--text {
  --at-apply: "bg-transparent shadow-none hover:bg-black hover:bg-opacity-10";
}
.f-button--gradient {
  --at-apply: "gradient-to-r hover:bg-primary-300 shadow text-white hover:bg-primary-300";
}
.f-button--primary {
  --at-apply: "bg-primary-300 hover:bg-primary-400 shadow text-white";
}
.f-button--outline {
  --at-apply: "bg-opacity-10 hover:bg-opacity-20 text-primary-400 shadow-none border border-primary-400";
}
.f-button--warning {
  --at-apply: "bg-warning-300 hover:bg-warning-400 shadow text-white";
}
.f-button--error {
  --at-apply: "bg-error-300 hover:bg-error-400 shadow text-white";
}
.f-button--info {
  --at-apply: "bg-info-300 hover:bg-info-400 shadow text-white";
}
.f-button--success {
  --at-apply: "bg-success-300 hover:bg-success-400 shadow text-white";
}
.f-button--rounded {
  --at-apply: "rounded-full";
}
</style>
