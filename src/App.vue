<script setup lang="ts">
import { RouterView } from "vue-router";
import FAppLayout from "./components/layouts/FAppLayout.vue";
</script>

<template>
  <f-app-layout>
    <router-view />
  </f-app-layout>
</template>

<style>
#app {
  @apply bg-gray-100;
  font-family: "Montserrat", sans-serif;
}
</style>
