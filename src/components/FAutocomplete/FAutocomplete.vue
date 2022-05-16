<script lang="ts" setup>
import { ref, computed } from "vue";
import { nanoid } from "nanoid";
import { Close } from "@vicons/ionicons5";
const props = defineProps({
  label: { type: String, default: "" },
  id: { type: String, default: null },
  suggestionsCount: { type: Number, default: 3 },
  clearable: { type: Boolean, default: false },
});

const autocomplete = ref<HTMLInputElement>();
const query = ref<string>("");
const inputId = ref<string>("");
const suggestionIndex = ref<number>(-1);
const showSuggestions = ref<boolean>(false);
const items = [
  { text: "Valencia", value: 1 },
  { text: "Castellón", value: 1 },
  { text: "Alicante", value: 1 },
  { text: "Badajoz", value: 1 },
  { text: "Cáceres", value: 1 },
  { text: "Mérida", value: 1 },
  { text: "Plasencia", value: 1 },
  { text: "Salamanca", value: 1 },
  { text: "Zamora", value: 1 },
  { text: "León", value: 1 },
  { text: "Burgos", value: 1 },
  { text: "Segovia", value: 1 },
  { text: "Soria", value: 1 },
  { text: "Palencia", value: 1 },
];
const suggestions = computed(() => {
  if (query.value) {
    const filtered = items.filter((item: { text: string; value: number }) =>
      item.text.toLowerCase().includes(query.value.toLowerCase())
    );
    if (filtered.length > props.suggestionsCount) {
      return filtered.slice(0, props.suggestionsCount);
    }
    return filtered;
  } else if (items.length > props.suggestionsCount) {
    return items.slice(0, props.suggestionsCount);
  } else {
    return items;
  }
});
inputId.value = props.id ?? nanoid();

const onInput = () => {
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
        query.value = suggestions.value[suggestionIndex.value].text;
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
    <div class="relative">
      <label v-if="label" :for="inputId" class="f-autocomplete--label">{{
        label
      }}</label>
      <input
        :id="inputId"
        class="f-autocomplete w-full"
        v-model="query"
        ref="autocomplete"
        placeholder="autocomplete"
        v-bind="$attrs"
        @focusin="showSuggestions = true"
        @focusout="showSuggestions = false"
        @keydown="onKeydown"
        @input="onInput"
      />
      <button
        class="absolute w-5 h-5 rounded-full top-1/2 transform translate-y-2 right-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
        @click.prevent="query = ''"
      >
        <Close v-if="clearable" class="w-4 h-4 text-gray-500 dark:text-white" />
      </button>
    </div>
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
          class="absolute top-1 bg-white dark:bg-dark-base w-full z-10 rounded shadow-md max-h-48 overflow-y-scroll transition ease-in-out delay-150"
        >
          <li
            class="text-slate-600 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-darkest px-4 py-2 cursor-pointer"
            v-for="(suggestion, index) in suggestions"
            :class="{ 'bg-dark-darkest': suggestionIndex === index }"
            :key="`suggestion-${index}`"
            @click="setValue(suggestion.text)"
          >
            {{ suggestion.text }}
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="sass">
.f-autocomplete--wrapper
  @apply flex flex-col justify-between align-center my-4 first:mt-0 last:mb-0
.f-autocomplete
  @apply dark:text-white dark:bg-dark-base dark:border-slate-700 border border-gray-200 text-xs mt-2 h-10 px-3 rounded focus:outline-none focus:ring-3 focus:ring-primary-400 transform-gpu ease-linear transition-all duration-100
.f-autocomplete--label
  @apply font-light text-xs focus:primary-text-300
input:focus + label
  @apply text-primary-400 ease-linear transition-all duration-100 font-semibold ease-in
</style>
