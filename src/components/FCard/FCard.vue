<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
import FCardImage from "@/components/FCard/FCardImage.vue";
import "./FCard.sass";

type FCardVariants = "default" | "primary" | "gradient";

const props = defineProps({
  title: { type: String },
  img: { type: String },
  alt: { type: String, default: "Card image" },
  imageHeight: { type: [String, Number], default: 300 },
  variant: { type: String as PropType<FCardVariants>, default: "default" },
});

const classes = computed(() => ({
  "f-card--primary": props.variant === "primary",
  "f-card--gradient": props.variant === "gradient",
}));
</script>

<template>
  <div class="f-card" :class="classes">
    <f-card-image
      v-if="img"
      :src="img"
      :alt="alt"
      :height="imageHeight"
      overlay
      lazy
    />
    <div class="f-card--title">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div class="f-card--body">
      <slot />
    </div>
    <div class="f-card--actions">
      <slot name="actions" />
    </div>
  </div>
</template>
