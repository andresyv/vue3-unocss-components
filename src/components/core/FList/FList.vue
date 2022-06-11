<script lang="ts" setup>
defineProps({
  tag: {
    type: String,
    default: "ul",
  },
});
</script>
<template>
  <component :is="tag" class="f-list">
    <slot />
  </component>
</template>
<style scoped>
.f-list {
  --at-apply: "bg-white dark:bg-dark-darkest rounded-md shadow space-y-1";
}
</style>
