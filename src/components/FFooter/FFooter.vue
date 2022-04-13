<script setup lang="ts">
import "./FFooter.sass";
const props = defineProps({
  title: { type: String, default: "Footer content" },
});
</script>

<template>
  <footer class="f-footer">
    <div class="f-footer--content">
      {{ title }}
    </div>
  </footer>
</template>
