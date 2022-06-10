<script lang="ts" setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  to: { type: String, required: true },
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
    :to="to"
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
  --at-apply: "bg-transparent rounded-lg px-2 py-1 hover:bg-slate-200 dark:hover:bg-primary-300 sm:dark:hover:bg-dark-darkest dark:hover:text-white sm:dark:hover:text-white flex items-center transition-all transform-gpu duration-150";
}
.f-nav-link--active {
  --at-apply: "bg-primary-300 sm:bg-slate-200 sm:dark:bg-dark-darkest dark:bg-primary-300 sm:text-primary-300 text-white hover:dark:text-white hover:text-white hover:dark:bg-primary-400";
}
</style>
