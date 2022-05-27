<script setup lang="ts">
import FAppBar from "@/components/FAppBar/FAppBar.vue";
import FFooter from "@/components/FFooter/FFooter.vue";
import FContent from "@/components/FContent/FContent.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col">
    <f-app-bar title="My awesome app" fixed />
    <f-content>
      <router-view></router-view>
    </f-content>
    <f-footer :title="`Made with ❤️ by @andresyv`" />
  </div>
</template>
