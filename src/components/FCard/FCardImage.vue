<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import type { PropType } from "vue";
type Ratio = "auto" | "16/9" | "square";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  animated: { type: Boolean, default: true },
  overlay: { type: Boolean, default: true },
  aspectRatio: { type: String as PropType<Ratio>, default: "auto" },
  height: { type: [String, Number], default: 300 },
  lazy: { type: Boolean, default: false },
});

const imgSrc = ref<string>(props.lazy ? "" : props.src);
const imageRef = ref();
const observer = ref();
const wrapperClasses = computed(() => ({
  "aspect-auto": props.aspectRatio === "auto",
  "aspect-video": props.aspectRatio === "16/9",
  "aspect-square": props.aspectRatio === "square",
}));
const imgClasses = computed(() => ({
  "f-card--image-hover-animation": props.animated,
}));
const styles = computed(
  () =>
    `background-image: url(${imgSrc.value}); height: ${
      typeof props.height === "number" ? `${props.height}px` : props.height
    }`
);

onMounted(() => {
  if (props.lazy) {
    observer.value = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        imgSrc.value = props.src;
        observer.value.disconnect();
      }
    });
    observer.value.observe(imageRef.value);
  }
});

onBeforeUnmount(() => {
  if (props.lazy && observer.value) {
    observer.value.disconnect();
  }
});
</script>
<template>
  <div class="f-card--image-wrapper" ref="imageRef" :class="wrapperClasses">
    <div
      class="f-card--image"
      :aria-label="alt"
      :class="imgClasses"
      :style="styles"
    />
    <div v-if="overlay" class="f-card--image-overlay"></div>
  </div>
</template>

<style lang="sass">
.f-card--image-wrapper
  @apply overflow-hidden relative rounded-lg bg-gray-200
.f-card--image
  @apply w-full bg-cover bg-no-repeat bg-center
.f-card--image-overlay
  @apply bg-gradient-to-t from-black to-transparent opacity-40 w-full h-full absolute top-0 z-0 pointer-events-none
.f-card--image-hover-animation
  @apply hover:scale-110 transform-gpu ease-in duration-200
</style>
