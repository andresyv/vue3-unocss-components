<script setup lang="ts">
import FGrid from "@/components/core/FGrid/FGrid.vue";
import FGridItem from "@/components/core/FGridItem/FGridItem.vue";
import FCard from "@/components/core/FCard/FCard.vue";
import FButton from "@/components/core/FButton/FButton.vue";

import LoginForm from "../components/Forms/LoginForm/LoginForm.vue";
import type { LoginInput } from "@/types";

const imgSrc =
  "https://images.unsplash.com/photo-1646936218493-d206c6284291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const imgSrc2 =
  "https://images.unsplash.com/photo-1649044750195-c5d73df24521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const imgSrc3 = "https://images.unsplash.com/photo-1649244451448-797144294226";

const loginHandler = (form: LoginInput) => {
  console.log("Login", form);
};
</script>

<template>
  <f-grid>
    <f-grid-item>
      <h1>Forms</h1>
    </f-grid-item>
    <f-grid-item>
      <login-form class="mx-auto" @login="loginHandler" />
    </f-grid-item>
    <f-grid-item>
      <h1>Cards</h1>
    </f-grid-item>
    <f-grid-item :md="6">
      <f-card :img="imgSrc" title="card test" :image-height="350">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus,
        ligula id rutrum iaculis, libero leo consequat nisi, quis sollicitudin
        orci augue nec justo.
        <template #actions>
          <div class="flex justify-end">
            <f-button color="success" hover block>Save</f-button>
          </div>
        </template>
      </f-card>
    </f-grid-item>
    <f-grid-item :md="6">
      <f-card :img="imgSrc3" title="card test" variant="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus,
        ligula id rutrum iaculis, libero leo consequat nisi, quis sollicitudin
        orci augue nec justo.
      </f-card>
    </f-grid-item>
  </f-grid>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
