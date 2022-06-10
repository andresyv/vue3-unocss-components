<script setup lang="ts">
import { ref } from "vue";

import FAppBar from "@/components/core/FAppBar/FAppBar.vue";
import FFooter from "@/components/core/FFooter/FFooter.vue";
import FContent from "@/components/core/FContent/FContent.vue";
import { RouterView } from "vue-router";
import FButton from "@/components/core/FButton/FButton.vue";
import config from "@/lib/app-config";
import FNavLink from "@/components/core/FNavLink/FNavLink.vue";
import { useTailwindBreakpoints } from "@/composables";
import FMenu from "../components/core/FMenu/FMenu.vue";
import FImage from "../components/core/FImage/FImage.vue";

const menu = ref<boolean>(false);
const { sm } = useTailwindBreakpoints();

const routes = [
  { to: "/", icon: "i-tabler-home", name: "Home" },
  { to: "/dashboard", icon: "i-tabler-layout-dashboard", name: "Dashboard" },
];
</script>

<template>
  <div class="flex flex-col">
    <f-app-bar :title="config.appTitle" fixed :scrolled="sm && menu">
      <div class="hidden sm:flex">
        <f-nav-link v-for="route in routes" :key="route.to" :to="route.to">
          <i class="w-4 h-4 mr-1" :class="route.icon"></i>
          {{ route.name }}
        </f-nav-link>
      </div>
      <template #actions>
        <f-menu v-model="menu" v-if="sm">
          <template #activator="{ on }">
            <f-button rounded icon @click="on.click">
              <div class="i-tabler-menu-2 w-5 h-5"></div>
            </f-button>
          </template>
          <template #default>
            <div max-h-56 overflow-y-auto space-y-2>
              <f-nav-link
                v-for="route in routes"
                :key="route.to"
                :to="route.to"
              >
                <i class="w-4 h-4 mr-1" :class="route.icon"></i>
                {{ route.name }}
              </f-nav-link>
            </div>
            <div flex flex-row w-full py-2 items-center>
              <div px-2 pr-2 py-1>
                <f-image
                  class="rounded-full shadow-md"
                  src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c1/c155cb4a8121fd7b2a1298c923e242aed793a7d7.jpg"
                  alt="avatar"
                  width="45px"
                  height="45px"
                />
              </div>
              <div flex-1 px-1>
                <div>Andrés Yepes</div>
                <div text="xs dark:slate-300 ">andresyv93@outlook.es</div>
              </div>
              <div px-3>
                <f-button rounded icon>
                  <div class="i-tabler-logout w-5 h-5"></div>
                </f-button>
              </div>
            </div>
          </template>
        </f-menu>
        <f-button v-else rounded icon>
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
