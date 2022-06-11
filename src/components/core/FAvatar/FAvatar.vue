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
  <div
    class="f-avatar"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :class="{ shadow: !tile, 'rounded-full': !tile }"
  >
    <f-image
      :src="src ?? '/images/user-placeholder.png'"
      :alt="alt"
      :width="size"
      :height="size"
      animated
      overlay
    />
  </div>
</template>

<style scoped>
.f-avatar {
  --at-apply: "overflow-hidden";
}
</style>
