<script setup lang="ts">
defineProps({
  title: { type: String, default: "Footer content" },
});
</script>

<template>
  <footer p="y-2 x-4" my-2>
    <div
      antialiased
      rounded-md
      bg="gray-200"
      font-thin
      text="sm slate-600 center"
      shadow
      p-3
      tracking-wide
      leading-relaxed
    >
      {{ title }}
    </div>
  </footer>
</template>
