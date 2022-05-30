<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  cols: { type: Number, default: 12 },
  sm: { type: Number },
  md: { type: Number },
  lg: { type: Number },
  xl: { type: Number },
  xxl: { type: Number },
  gap: { type: Number, default: 2 },
});
const classes = computed(() => ({
  [`grid-cols-${props.cols}`]: true,
  [`sm:grid-cols-${props.sm}`]: !!props.sm,
  [`md:grid-cols-${props.md}`]: !!props.md,
  [`lg:grid-cols-${props.lg}`]: !!props.lg,
  [`xl:grid-cols-${props.xl}`]: !!props.xl,
  [`2xl:grid-cols-${props.xxl}`]: !!props.xxl,
  [`gap-${props.gap}`]: true,
}));
</script>

<template>
  <div class="grid" :class="classes">
    <slot />
  </div>
</template>
