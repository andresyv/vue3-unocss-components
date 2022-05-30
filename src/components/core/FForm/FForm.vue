<script setup lang="ts">
import { useForm } from "vee-validate";

const props = defineProps({
  initialValues: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["submit"]);

const { handleSubmit, isSubmitting, submitCount } = useForm({
  initialValues: props.initialValues,
});

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});
</script>

<template>
  <form @submit.prevent="onSubmit" v-bind="$attrs">
    <slot v-bind="{ isSubmitting, submitCount }" />
  </form>
</template>
