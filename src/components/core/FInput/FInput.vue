<script setup lang="ts">
import { computed, ref } from "vue";
import type { PropType } from "vue";
import { useField } from "vee-validate";
import { nanoid } from "nanoid";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  id: { type: String, default: null },
  label: { type: String, default: "" },
  name: { type: String },
  placeholder: { type: String, default: "Type something" },
  rules: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Function as PropType<(value: any) => string | boolean>,
    default: () => true,
  },
});

const inputId = ref<string>("");
const emit = defineEmits(["update:modelValue"]);
const field = props.name ?? "inputField";

const { errorMessage, value, handleChange } = useField(field, props.rules, {
  validateOnValueUpdate: false,
});

inputId.value = props.id ?? nanoid();

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
    <label v-if="label" :for="inputId" class="f-input--label"
      >{{ label }}

      <input
        :id="inputId"
        class="f-input"
        v-model="value"
        w-full
        :placeholder="placeholder"
        v-on="validationListeners"
        v-bind="$attrs"
      />
    </label>
    <span v-if="errorMessage" class="f-input--error">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.f-input--wrapper {
  --at-apply: "flex flex-col justify-around align-center my-4 first:mt-0 last:mb-0";
}
.f-input {
  --at-apply: "dark:text-white dark:bg-dark-base dark:border-slate-700 border border-gray-400 text-xs mt-2 h-8 px-3 rounded focus:outline-none focus:border-0 focus:ring-2 focus:ring-primary-400 transform-gpu ease-linear transition-all duration-150";
}
.f-input--label {
  --at-apply: "relative font-light text-xs focus-within:text-primary-300 ease-linear transition-all duration-100";
}
.f-input--error {
  --at-apply: "text-error-400 text-xs font-light mt-3";
}
</style>
