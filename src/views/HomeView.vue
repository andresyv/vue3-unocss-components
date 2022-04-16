<script setup lang="ts">
import FGrid from "@/components/FGrid/FGrid.vue";
import FGridItem from "@/components/FGridItem/FGridItem.vue";
import FCard from "../components/FCard/FCard.vue";
import FButton from "../components/FButton/FButton.vue";
import FImage from "../components/FImage/FImage.vue";

const imgSrc =
  "https://images.unsplash.com/photo-1646936218493-d206c6284291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const imgSrc2 =
  "https://images.unsplash.com/photo-1649044750195-c5d73df24521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const imgSrc3 = "https://images.unsplash.com/photo-1649244451448-797144294226";
</script>

<template>
  <f-grid>
    <f-grid-item>
      <h1>Cards</h1>
    </f-grid-item>
    <f-grid-item :span="12">
      <f-card :img="imgSrc" title="card test">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus,
        ligula id rutrum iaculis, libero leo consequat nisi, quis sollicitudin
        orci augue nec justo.
        <template #actions>
          <div class="flex justify-end">
            <f-button color="primary" block hover>Save</f-button>
          </div>
        </template>
      </f-card>
    </f-grid-item>
    <f-grid-item :span="12" :md="6">
      <f-card :img="imgSrc2" title="card test">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus,
        ligula id rutrum iaculis, libero leo consequat nisi, quis sollicitudin
        orci augue nec justo.
        <template #actions>
          <div class="flex justify-end">
            <f-button color="primary" block hover>Save</f-button>
          </div>
        </template>
      </f-card>
    </f-grid-item>
    <f-grid-item :span="12" :md="6">
      <f-card :img="imgSrc3" title="card test">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus,
        ligula id rutrum iaculis, libero leo consequat nisi, quis sollicitudin
        orci augue nec justo.
        <template #actions>
          <div class="flex justify-end">
            <f-button color="primary" block hover>Save</f-button>
          </div>
        </template>
      </f-card>
    </f-grid-item>
  </f-grid>
</template>
