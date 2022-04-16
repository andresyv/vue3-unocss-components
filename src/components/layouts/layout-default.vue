<script setup lang="ts">
import FAppBar from "@/components/FAppBar/FAppBar.vue";
import FFooter from "@/components/FFooter/FFooter.vue";
import FContent from "../FContent/FContent.vue";
</script>
<template>
  <div class="flex flex-col">
    <f-app-bar title="My awesome app" fixed />
    <f-content>
      <slot />
    </f-content>
    <f-footer
      :title="`Made with ❤️ by @andresyv &copy; ${new Date().getFullYear()}`"
    />
  </div>
</template>
