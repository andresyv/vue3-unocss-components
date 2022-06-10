<script lang="ts" setup>
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["update:modelValue"]);

const open = ref<boolean>(false);

const menu = ref(null);

onClickOutside(menu, () => (open.value = false));

const handlers = computed(() => ({
  click: () => {
    open.value = !open.value;
    emit("update:modelValue", open.value);
  },
}));
</script>

<template>
  <div class="f-menu" ref="menu">
    <slot name="activator" :on="handlers"></slot>
    <transition name="scale-in-ver-top">
      <div v-if="open" class="f-menu--items">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.f-menu {
  --at-menu: "relative";
}
.f-menu--items {
  --at-apply: "absolute right-0 top-14 bg-white dark:bg-dark-darkest rounded-b-xl w-full dark:text-white text-slate-600 shadow-md px-2 pt-2 pb-1";
}
.f-menu--actions {
  --at-apply: "relative";
}
</style>
