<script lang="ts" setup>
import { useSlots } from "vue";

defineProps({
  tag: { type: String, default: "li" },
});
const slots = useSlots();
</script>

<template>
  <component class="f-list-item" :is="tag">
    <div v-if="slots.prefix">
      <slot name="prefix" />
    </div>
    <div flex-1 px-2>
      <slot />
    </div>
    <div v-if="slots.suffix" px-3 py-1>
      <slot name="suffix" />
    </div>
  </component>
</template>
<style scoped>
.f-list-item {
  --at-apply: "flex flex-row items-center bg-white dark:bg-dark-darkest border-b border-b-slate-200 last:border-b-0 p-1";
}
</style>
