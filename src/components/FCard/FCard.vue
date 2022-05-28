<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import FCardImage from "@/components/FCard/FCardImage.vue";

type FCardVariants = "default" | "primary" | "gradient";

const props = defineProps({
  title: { type: String },
  img: { type: String },
  alt: { type: String, default: "Card image" },
  imageHeight: { type: [String, Number], default: 300 },
  variant: { type: String as PropType<FCardVariants>, default: "default" },
});

const classes = computed(() => {
  const bgVariant: { [key in FCardVariants]: string } = {
    default: "white",
    primary: "primary-300",
    gradient: "gradient-to-b",
  };
  return {
    bg: `${bgVariant[props.variant]} dark:dark-darkest`,
    text: `${props.variant === "default" ? "slate-500" : "white"}`,
  };
});
</script>

<template>
  <div flex="col" :bg="classes.bg" p="2" shadow rounded-lg>
    <f-card-image
      v-if="img"
      :src="img"
      :alt="alt"
      :height="imageHeight"
      overlay
      lazy
    />
    <div text="slate-600 dark:primary-400" p="y-3 x-2" font-semibold capitalize>
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div flex="1" p="y-4 x-2" :text="classes.text">
      <slot />
    </div>
    <div p="t-4 b-2 x-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.f-card--actions
  @apply pt-4 pb-2 px-2

.f-card--primary
  @apply bg-primary-300
  .f-card--title
    @apply text-white
  .f-card--body
    @apply text-white
  .f-card--actions
    @apply text-white

.f-card--gradient
  @apply gradient-to-b
  .f-card--title
    @apply text-white
  .f-card--body
    @apply text-white
  .f-card--actions
    @apply text-white
</style>
