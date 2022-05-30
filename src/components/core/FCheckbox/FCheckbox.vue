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
  <div inline-flex items-center>
    <input
      v-model="value"
      type="checkbox"
      bg="checked:primary-100"
      @change="onInput"
      :value="true"
    />
    <label mx-1 text-sm>{{ label }}</label>
  </div>
</template>
