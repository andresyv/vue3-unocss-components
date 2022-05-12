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

const classes = computed(() => ({
  "f-card--primary": props.variant === "primary",
  "f-card--gradient": props.variant === "gradient",
}));
</script>

<template>
  <div class="f-card" :class="classes">
    <f-card-image
      v-if="img"
      :src="img"
      :alt="alt"
      :height="imageHeight"
      overlay
      lazy
    />
    <div class="f-card--title">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div class="f-card--body">
      <slot />
    </div>
    <div class="f-card--actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.f-card
  @apply flex flex-col shadow rounded-lg pt-2 pb-2 px-2 bg-white dark:bg-dark-darkest dark:text-white
.f-card--title
  @apply font-semibold text-slate-600 capitalize py-3 dark:text-primary-400 px-2
.f-card--body
  @apply flex-1 py-4 px-2 dark:text-white prose-sm
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
