import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";

import LoginForm from "../LoginForm.vue";

describe("LoginForm", () => {
  const wrapper = mount(LoginForm);
  it("renders", () => {
    const form = wrapper.find("form");

    expect(form.exists()).toBeTruthy();

    expect(form.find('input[type="email"]').exists()).toBeTruthy();
    expect(form.find('input[type="password"]').exists()).toBeTruthy();
    expect(form.find('button[type="submit"]').exists()).toBeTruthy();
  });
  it("submits", async () => {
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('button[type="submit"]');

    emailInput.setValue("demo@mail.com");
    passwordInput.setValue("test-password");
    submitButton.trigger("submit");

    await flushPromises();
    await waitForExpect(() => {
      expect(wrapper.emitted()).toHaveProperty("login");
    });
  });
});
