<script setup lang="ts">
import { computed, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  overlay: { type: Boolean, default: true },
  height: { type: [String, Number], default: 300 },
  lazy: { type: Boolean, default: false },
});

const imgSrc = ref<string>(props.lazy ? "" : props.src);
const imageRef = ref(null);

useIntersectionObserver(imageRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    imgSrc.value = props.src;
  }
});

const styles = computed(
  () =>
    `background-image: url(${imgSrc.value}); height: ${
      typeof props.height === "number" ? `${props.height}px` : props.height
    }`
);
</script>
<template>
  <div overflow="hidden" relative rounded-lg bg="gray-200" ref="imageRef">
    <div
      role="img"
      bg="cover no-repeat center"
      hover="scale-110"
      transform-gpu
      ease-in
      duration="200"
      w-full
      :alt="alt"
      :style="styles"
    />
    <div
      v-if="overlay"
      bg-gradient-to-t
      from-black
      to-transparent
      opacity="40"
      w-full
      h-full
      absolute
      top="0"
      z="0"
      pointer="events-none"
    ></div>
  </div>
</template>
