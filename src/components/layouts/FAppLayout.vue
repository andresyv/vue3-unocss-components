<script setup lang="ts">
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layout-default.vue";

const route = useRoute();
const layout = ref();
watch(
  () => route.meta,
  async (meta) => {
    try {
      const component = await import(`./layout-${meta.layout}.vue`);
      layout.value = component?.default || DefaultLayout;
    } catch (err) {
      layout.value = DefaultLayout;
    }
  },
  { immediate: true }
);
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
