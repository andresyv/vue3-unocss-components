<script setup lang="ts">
import FCardImage from "./FCardImage.vue";

defineProps({
  title: { type: String },
  img: { type: String },
  alt: { type: String, default: "Card image" },
  imageHeight: { type: [String, Number], default: 300 },
});
</script>

<template>
  <div flex="col" bg="white dark:dark-darkest" p="2" shadow="md" rounded="lg">
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
    <div flex="1" p="y-4 x-2" text="slate-500 dark:white">
      <slot />
    </div>
    <div p="t-4 b-2 x-2">
      <slot name="actions" />
    </div>
  </div>
</template>
