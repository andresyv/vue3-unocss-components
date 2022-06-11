<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  stopAtFirst: { type: Boolean, default: false },
  tag: { type: String, default: "div" },
});
const emit = defineEmits(["update:modelValue"]);

const target = ref(null);

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting && props.stopAtFirst) {
    stop();
  }
  emit("update:modelValue", isIntersecting);
});
</script>

<template>
  <component :is="tag" ref="target">
    <slot />
  </component>
</template>
