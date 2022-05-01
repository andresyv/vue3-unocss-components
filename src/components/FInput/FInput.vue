<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: { type: String, default: "" },
  name: { type: String },
  placeholder: { type: String, default: "Type something" },
  rules: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Function as PropType<(value: any) => string | boolean>,
    default: () => true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const field = props.name ?? "inputField";

const { errorMessage, value, handleChange } = useField(field, props.rules, {
  validateOnValueUpdate: false,
});

const validationListeners = computed(() => {
  if (!errorMessage.value) {
    return {
      blur: handleChange,
      change: handleChange,
      input: (e: Event) => {
        handleChange(e, false);
        onInput(e);
      },
    };
  }
  return {
    blur: handleChange,
    change: handleChange,
    input: (e: Event) => {
      handleChange(e);
      onInput(e);
    },
  };
});

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
<template>
  <div class="f-input--wrapper">
    <span v-if="errorMessage" class="text-error-400 text-xs font-thin mt-2">{{
      errorMessage
    }}</span>
    <input
      class="f-input"
      v-model="value"
      :placeholder="placeholder"
      v-on="validationListeners"
      v-bind="$attrs"
    />
    <label v-if="label" class="f-input--label">{{ label }}</label>
  </div>
</template>

<style scoped lang="sass">
.f-input--wrapper
  @apply flex flex-col-reverse justify-between align-center my-4 first:mt-0 last:mb-0
.f-input
  @apply dark:text-white dark:bg-dark-base dark:border-slate-700 border border-gray-200 text-xs mt-2 h-8 px-3 rounded focus:outline-none focus:ring-3 focus:ring-primary-400 transform-gpu ease-linear transition-all duration-150
.f-input--label
  @apply font-light text-xs focus:primary-text-300
input:focus + label
  @apply text-primary-400 ease-linear transition-all duration-150 font-semibold ease-in
</style>
