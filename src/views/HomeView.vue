<script setup lang="ts">
import { ref } from "vue";
import FGrid from "@/components/FGrid/FGrid.vue";
import FGridItem from "@/components/FGridItem/FGridItem.vue";
import FCard from "@/components/FCard/FCard.vue";
import FButton from "@/components/FButton/FButton.vue";
import FInput from "@/components/FInput/FInput.vue";
import FForm from "@/components/FForm/FForm.vue";

import { isRequired, isEmail } from "@/components/utils";
import FCheckbox from "../components/FCheckbox/FCheckbox.vue";

const imgSrc =
  "https://images.unsplash.com/photo-1646936218493-d206c6284291?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const imgSrc2 =
  "https://images.unsplash.com/photo-1649044750195-c5d73df24521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const imgSrc3 = "https://images.unsplash.com/photo-1649244451448-797144294226";

const form = ref({
  email: "",
  password: "",
  remember: false,
});

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

const onSubmit = (form: { email: string; password: string }) => {
  alert(`Login ${form.email}:${form.password}`);
};
</script>

<template>
  <f-grid>
    <f-grid-item>
      <h1>Forms</h1>
    </f-grid-item>
    <f-grid-item>
      <f-card class="max-w-xl mx-auto my-2">
        <template #header>
          <img class="w-18 h-18" src="@/assets/logo.svg" alt="Vue Logo" />
          <div class="pt-5 pb-2">
            <span class="text-lg font-black">Sign in to Your Account</span>
          </div>
        </template>
        <f-form @submit="onSubmit" :initial-values="{ email: 'demo@mail.com' }">
          <f-input
            label="Name"
            v-model="form.email"
            placeholder="mail@example.com"
            :rules="emailRules"
            name="email"
            type="email"
            autocomplete="email"
          />
          <f-input
            label="Password"
            v-model="form.password"
            placeholder="*****"
            name="password"
            :rules="passwordRules"
            type="password"
            autocomplete="password"
          />
          <f-checkbox v-model="form.remember" label="Remember me" />
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
