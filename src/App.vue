<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style>
#app {
  @apply bg-gray-100 dark:bg-dark-base dark:text-white;
  font-family: "Montserrat", sans-serif;
}
</style>
