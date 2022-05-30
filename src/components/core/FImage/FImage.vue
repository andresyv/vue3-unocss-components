<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";

type Ratio = "auto" | "16/9" | "square";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: [String, Number], default: 300 },
  height: { type: [String, Number], default: 300 },
  animated: { type: Boolean, default: false },
  overlay: { type: Boolean, default: false },
  aspectRatio: { type: String as PropType<Ratio>, default: "auto" },
});

const wrapperClasses = computed(() => ({
  "aspect-auto": props.aspectRatio === "auto",
  "aspect-video": props.aspectRatio === "16/9",
  "aspect-square": props.aspectRatio === "square",
}));
const styles = computed(() => ({
  height: typeof props.height === "number" ? `${props.height}px` : props.height,
  width: typeof props.width === "number" ? `${props.width}px` : props.width,
}));
const imgClasses = computed(() => ({
  "f-image--hover-animation": props.animated,
}));
</script>

<template>
  <div class="f-image--wrapper" :style="styles" :class="wrapperClasses">
    <img
      class="f-image object-fill object-center"
      :class="imgClasses"
      :style="styles"
      :src="src"
      :alt="alt"
    />
    <div v-if="overlay" class="f-image--overlay"></div>
  </div>
</template>

<style scoped>
.f-image--wrapper {
  --apply-at: "overflow-hidden relative";
}
.f-image {
  --at-apply: "m-auto";
}
.f-image--overlay {
  --at-apply: "bg-gradient-to-t from-black to-transparent opacity-40 w-full h-full absolute top-0 z-0 pointer-events-none";
}

.f-image--hover-animation {
  --at-apply: "hover:scale-110 transform-gpu ease-in duration-200";
}
</style>
