<script setup lang="ts">
import FAppBar from "@/components/core/FAppBar/FAppBar.vue";
import FFooter from "@/components/core/FFooter/FFooter.vue";
import FContent from "@/components/core/FContent/FContent.vue";
import { RouterView } from "vue-router";
import FButton from "../components/core/FButton/FButton.vue";
</script>

<template>
  <div class="flex flex-col">
    <f-app-bar title="My awesome app" fixed>
      <template #actions>
        <f-button rounded icon>
          <div class="i-tabler-logout w-5 h-5"></div>
        </f-button>
      </template>
    </f-app-bar>
    <f-content>
      <router-view></router-view>
    </f-content>
    <f-footer :title="`Made with ❤️ by @andresyv`" />
  </div>
</template>
