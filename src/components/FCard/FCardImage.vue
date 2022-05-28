<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  overlay: { type: Boolean, default: true },
  height: { type: [String, Number], default: 300 },
  lazy: { type: Boolean, default: false },
});

const imgSrc = ref<string>(props.lazy ? "" : props.src);
const imageRef = ref();
const observer = ref();

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
