<script setup lang="ts">
import { ref } from "vue";
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: { type: String, default: "" },
});

const value = ref<boolean>(false);

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
</script>

<template>
  <div class="f-checkbox--wrapper">
    <input v-model="value" type="checkbox" @change="onInput" :value="true" />
    <label class="f-checkbox--label">{{ label }}</label>
  </div>
</template>

<style lang="sass" scoped>
.f-checkbox
  @apply checked:bg-primary-100
.f-checkbox--wrapper
  @apply inline-flex items-center
.f-checkbox--label
  @apply mx-1 text-sm
</style>
