<script lang="ts" setup>
import { ref, computed } from "vue";
import type { PropType } from "vue";
import { nanoid } from "nanoid";

import { useField } from "vee-validate";

export type AutoCompleteItem = {
  label: string;
  value: unknown;
};

const props = defineProps({
  items: { type: Array as PropType<AutoCompleteItem[]>, default: () => [] },
  label: { type: String, default: "" },
  name: { type: String },
  id: { type: String, default: null },
  suggestionsCount: { type: Number, default: 3 },
  clearable: { type: Boolean, default: false },
  rules: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Function as PropType<(value: any) => string | boolean>,
    default: () => true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const field = props.name ?? "inputField";

const autocomplete = ref<HTMLInputElement>();
const inputId = ref<string>("");
const suggestionIndex = ref<number>(-1);
const showSuggestions = ref<boolean>(false);

inputId.value = props.id ?? nanoid();

const {
  errorMessage,
  value: query,
  handleChange,
  resetField,
} = useField<string>(field, props.rules, {
  validateOnValueUpdate: false,
});

const suggestions = computed(() => {
  if (query.value) {
    const filtered = props.items.filter((item) =>
      item.label.toLowerCase().includes(query.value.toLowerCase())
    );
    if (filtered.length > props.suggestionsCount) {
      return filtered.slice(0, props.suggestionsCount);
    }
    return filtered;
  } else if (props.items.length > props.suggestionsCount) {
    return props.items.slice(0, props.suggestionsCount);
  } else {
    return props.items;
  }
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
  if (!showSuggestions.value) {
    showSuggestions.value = true;
  }
};
const setValue = (value: string) => {
  query.value = value;
};

const onKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case "Escape":
      showSuggestions.value = false;
      autocomplete.value?.blur();
      suggestionIndex.value = -1;
      break;
    case "Enter":
      e.preventDefault();
      if (suggestionIndex.value >= 0) {
        query.value = suggestions.value[suggestionIndex.value].label;
        showSuggestions.value = false;
        autocomplete.value?.blur();
        suggestionIndex.value = -1;
      }
      break;
    case "ArrowDown":
      suggestionIndex.value = Math.min(
        suggestions.value.length - 1,
        Math.max(0, (suggestionIndex.value += 1))
      );
      break;
    case "ArrowUp":
      suggestionIndex.value = Math.min(
        suggestions.value.length - 1,
        Math.max(0, (suggestionIndex.value -= 1))
      );
      break;
  }
};
</script>

<template>
  <div class="f-autocomplete--wrapper">
    <label v-if="label" :for="inputId" class="f-autocomplete--label"
      >{{ label }}
      <input
        :id="inputId"
        type="text"
        class="f-autocomplete"
        w-full
        v-model="query"
        ref="autocomplete"
        placeholder="autocomplete"
        v-bind="$attrs"
        @focusin="showSuggestions = true"
        @focusout="showSuggestions = false"
        @keydown="onKeydown"
        @input="onInput"
        v-on="validationListeners" />
      <button
        class="absolute items-center p-0.5 rounded-full top-1/2 transform translate-y-0.5 right-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
        @click.prevent="resetField()"
      >
        <div class="i-tabler-x w-4 h-4 align-middle"></div></button
    ></label>
    <span v-if="errorMessage" class="f-autocomplete--error">{{
      errorMessage
    }}</span>

    <div class="relative">
      <Transition
        enter-active-class="transition-opacity duration-100 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-75 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          v-if="showSuggestions"
          class="absolute text-sm top-1 bg-white dark:bg-dark-base w-full z-10 rounded shadow-md max-h-48 overflow-y-auto transition ease-in-out delay-150"
        >
          <li
            class="text-slate-600 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-darkest px-4 py-2 cursor-pointer"
            v-for="(suggestion, index) in suggestions"
            :class="{ 'bg-dark-darkest': suggestionIndex === index }"
            :key="`suggestion-${index}`"
            @click="setValue(suggestion.label)"
          >
            {{ suggestion.label }}
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.f-autocomplete--wrapper {
  --at-apply: "flex flex-col justify-between align-center my-4 first:mt-0 last:mb-0";
}
.f-autocomplete {
  --at-apply: "dark:text-white dark:focus:text-white dark:bg-dark-base dark:border-slate-700 border border-gray-400 text-xs mt-2 h-10 px-3 rounded focus:border-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:text-slate-600 transform-gpu ease-linear transition-all duration-100";
}
.f-autocomplete--label {
  --at-apply: "relative font-light text-xs focus-within:text-primary-300 ease-linear transition-all duration-100";
}
.f-autocomplete--error {
  --at-apply: "text-error-400 text-xs font-light mt-3";
}
</style>
