<script setup lang="ts">
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

<style lang="sass" scoped>
.f-footer
  @apply py-2 px-4 my-2
.f-footer--content
  @apply antialiased rounded-md bg-gray-200 text-sm font-thin text-slate-600 shadow p-3 text-center tracking-wide leading-relaxed
</style>
