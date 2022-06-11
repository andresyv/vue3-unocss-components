<script lang="ts" setup>
import type { PropType } from "vue";
import type { User } from "@/types";

import FMenu from "@/components/core/FMenu/FMenu.vue";
import FAvatar from "@/components/core/FAvatar/FAvatar.vue";
import FList from "../core/FList/FList.vue";
import FListItem from "@/components/core/FList/FListItem.vue";

defineProps({
  user: {
    type: Object as PropType<User>,
    default: () => null,
  },
});

const onLogout = () => alert("logout");
</script>

<template>
  <f-menu items-classes="w-42 !px-1">
    <template #activator="{ on }">
      <f-avatar
        :src="user.avatar"
        :alt="`${user.name} avatar`"
        :size="40"
        @click="on.click"
      ></f-avatar>
    </template>
    <div overflow-y-auto>
      <f-list p-1>
        <f-list-item to="/profile">
          <template #prefix>
            <i class="i-tabler-user-circle w-4 h-4"></i>
          </template>
          Profile
        </f-list-item>
        <f-list-item @click="onLogout">
          <template #prefix>
            <i class="i-tabler-logout w-4 h-4"></i>
          </template>
          Logout
        </f-list-item></f-list
      >
    </div>
  </f-menu>
</template>
