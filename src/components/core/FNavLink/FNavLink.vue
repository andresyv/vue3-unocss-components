<script lang="ts" setup>
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  // @ts-ignore
  ...RouterLink.props,
  inactiveClass: String,
});

const isExternalLink = computed(
  () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      mx-1
      class="f-nav-link"
      :class="{ 'f-nav-link--active': isActive }"
    >
      <slot />
    </a>
  </router-link>
</template>

<style scoped>
.f-nav-link {
  --at-apply: "bg-transparent rounded-lg px-2 py-1 hover:bg-slate-200 dark:hover:bg-dark-darkest flex items-center";
}
.f-nav-link--active {
  --at-apply: "bg-slate-200 dark:bg-dark-darkest text-primary-300 hover:bg-primary-400 hover:text-white";
}
</style>
