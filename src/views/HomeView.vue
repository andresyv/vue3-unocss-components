<script setup lang="ts">
import FGrid from "@/components/FGrid/FGrid.vue";
import FGridItem from "@/components/FGridItem/FGridItem.vue";
</script>

<template>
  <f-grid>
    <f-grid-item :span="12" :md="6" :lg="4">
      <div class="rounded m-2 bg-purple-400 text-white px-6 py-2">AA</div>
    </f-grid-item>
    <f-grid-item :span="12" :md="6" :lg="4">
      <div class="rounded m-2 bg-purple-400 text-white px-6 py-2">BBB</div>
    </f-grid-item>
  </f-grid>
</template>
