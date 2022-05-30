<script setup lang="ts">
import FCard from "@/components/core/FCard/FCard.vue";
import FInput from "@/components/core/FInput/FInput.vue";
import FForm from "@/components/core/FForm/FForm.vue";
import FCheckbox from "@/components/core/FCheckbox/FCheckbox.vue";
import FButton from "@/components/core/FButton/FButton.vue";
import { isRequired, isEmail } from "@/components/core/utils";

import type { LoginInput } from "@/types";

const emit = defineEmits(["login"]);

const emailRules = (value: string) => {
  if (!isRequired(value)) {
    return "Email is required";
  }
  if (!isEmail(value)) {
    return "Email must be a valid email";
  }
  return true;
};
const passwordRules = (value: string) => {
  if (!isRequired(value)) {
    return "Password is required";
  }
  if (value.length < 5) {
    return "Password be at least 5 characters long";
  }
  return true;
};

const onSubmit = (form: LoginInput) => {
  emit("login", form);
};
</script>

<template>
  <f-card class="max-w-xl">
    <template #header>
      <img class="w-18 h-18" src="@/assets/logo.svg" alt="Vue Logo" />
      <div class="pt-5 pb-2">
        <span class="text-lg font-black">Sign in to Your Account</span>
      </div>
    </template>
    <f-form @submit="onSubmit" :initial-values="{ email: 'demo@mail.com' }">
      <f-input
        label="Name"
        placeholder="mail@example.com"
        :rules="emailRules"
        name="email"
        type="email"
        autocomplete="email"
      />
      <f-input
        label="Password"
        placeholder="*****"
        name="password"
        :rules="passwordRules"
        type="password"
        autocomplete="password"
      />

      <f-checkbox label="Remember me" />
      <div class="flex justify-between mt-10">
        <a class="text-xs text-info-300 hover:underline" href="#"
          >Don't have an account?</a
        >
        <a class="text-xs text-info-300 hover:underline" href="#"
          >Forgot your password?</a
        >
      </div>
      <div class="mt-10">
        <f-button color="primary" block type="submit"> Submit </f-button>
      </div>
    </f-form>
  </f-card>
</template>
