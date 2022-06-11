<script setup lang="ts">
import { ref } from "vue";

import FAvatar from "@/components/core/FAvatar/FAvatar.vue";
import FAppBar from "@/components/core/FAppBar/FAppBar.vue";
import FFooter from "@/components/core/FFooter/FFooter.vue";
import FContent from "@/components/core/FContent/FContent.vue";
import { RouterView } from "vue-router";
import FButton from "@/components/core/FButton/FButton.vue";
import config from "@/lib/app-config";
import FNavLink from "@/components/core/FNavLink/FNavLink.vue";
import { useTailwindBreakpoints } from "@/composables";
import FMenu from "@/components/core/FMenu/FMenu.vue";
import FListItem from "@/components/core/FList/FListItem.vue";
import AppConfig from "@/lib/app-config";
import UserMenu from "../components/UserMenu/UserMenu.vue";

const menu = ref<boolean>(false);
const { sm } = useTailwindBreakpoints();

const routes = [
  { to: "/", icon: "i-tabler-home", name: "Home" },
  { to: "/dashboard", icon: "i-tabler-layout-dashboard", name: "Dashboard" },
];

const [user] = AppConfig.users;
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
        <f-menu v-model="menu" v-if="sm" items-classes="w-full">
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
            <f-list-item tag="div">
              <template #prefix>
                <f-avatar
                  :src="user.avatar"
                  :alt="`${user.name} avatar`"
                  :size="40"
                />
              </template>
              <div class="text-sm">{{ user.name }}</div>
              <div class="text-xs text-slate-400">{{ user.email }}</div>
              <template #suffix>
                <f-button rounded icon>
                  <div class="i-tabler-logout w-5 h-5"></div>
                </f-button>
              </template>
            </f-list-item>
          </template>
        </f-menu>
        <user-menu :user="user" v-else />
      </template>
    </f-app-bar>
    <f-content>
      <router-view></router-view>
    </f-content>
    <f-footer :title="`Made with ❤️ by @andresyv`" />
  </div>
</template>
