<script lang="ts" setup>
import { useSlots, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  tag: { type: String, default: "li" },
  bordered: { type: Boolean, default: false },
  to: { type: String },
  hover: { type: Boolean, default: false },
});
const emit = defineEmits(["click"]);
const slots = useSlots();
const router = useRouter();
const route = useRoute();

const onClick = computed(() => {
  if (props.to) {
    return () => router.push(`${props.to}`);
  }
  return () => emit("click");
});
</script>

<template>
  <component
    class="f-list-item"
    :is="tag"
    :class="{
      'border-b border-b-slate-200 dark:border-b-dark last:border-b-0':
        bordered,
      'f-list-item--nav-link': !!to,
      'f-list-item--nav-link--active': !!to && route.path === to,
      'cursor-pointer': !!$attrs.onClick || !!to,
      'f-list-item--hover': props.hover,
    }"
    @click="onClick"
  >
    <div v-if="slots.prefix" class="f-list-item--prefix">
      <slot name="prefix" />
    </div>
    <div flex-1 px-2>
      <slot />
    </div>
    <div v-if="slots.suffix" class="f-list-item--sufix">
      <slot name="suffix" />
    </div>
  </component>
</template>
<style scoped>
.f-list-item {
  --at-apply: "flex flex-row items-center bg-white dark:bg-dark-darkest p-1";
}
.f-list-item--hover {
  --at-apply: "hover:bg-gray-200 hover:dark:bg-primary-300 rounded-md cursor-pointer";
}
.f-list-item--prefix {
  --at-apply: "flex";
}
.f-list-item--sufix {
  --at-apply: "flex";
}
.f-list-item--nav-link {
  --at-apply: "bg-transparent rounded-lg px-2 py-1 hover:bg-slate-200 dark:hover:!bg-primary-300 dark:hover:text-white sm:dark:hover:text-white flex items-center transition-all transform-gpu duration-150";
}
.f-list-item--nav-link--active {
  --at-apply: "bg-primary-300 sm:dark:bg-dark-darkest dark:bg-primary-300 text-white hover:dark:text-white hover:text-white hover:dark:bg-primary-400";
}
</style>
