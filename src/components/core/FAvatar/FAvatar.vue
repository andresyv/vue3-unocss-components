<script lang="ts" setup>
import FImage from "../FImage/FImage.vue";

defineProps({
  src: { type: String },
  alt: { type: String, required: true },
  size: { type: Number, default: 30 },
  tile: { type: Boolean, default: false },
});
</script>

<template>
  <f-image
    :src="src ?? '/images/user-placeholder.png'"
    :alt="alt"
    :width="size"
    :height="size"
    :class="{ shadow: !tile, 'rounded-full': !tile }"
  />
</template>
