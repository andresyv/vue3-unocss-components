<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  span: { type: Number, default: 12 },
  sm: { type: Number },
  md: { type: Number },
  lg: { type: Number },
  xl: { type: Number },
  xxl: { type: Number },
});
const classes = computed(() => ({
  [`col-span-${props.span}`]: true,
  [`sm:col-span-${props.sm}`]: !!props.sm,
  [`md:col-span-${props.md}`]: !!props.md,
  [`lg:col-span-${props.lg}`]: !!props.lg,
  [`xl:col-span-${props.xl}`]: !!props.xl,
  [`2xl:col-span-${props.xxl}`]: !!props.xxl,
}));
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
