/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import FInput from "../FInput.vue";

describe("FInput", () => {
  expect(FInput).toBeTruthy();

  describe("Component exists and renders correctly", () => {
    it("renders properly", () => {
      const wrapper = mount(FInput, {
        attrs: { type: "text" },
        props: { label: "My test input", name: "test" },
      });
      expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
      expect(wrapper.find("label").html()).toContain("My test input");
    });
  });

  describe("Component set value", () => {
    it("set value on input text", async () => {
      const wrapper = mount(FInput, {
        attrs: { type: "text" },
        props: { label: "My test input", name: "test" },
      });
      const textInput = wrapper.find('input[type="text"]');
      await textInput.setValue("My name");
      // @ts-ignore
      expect(wrapper.find('input[type="text"]').element.value).toBe("My name");
    });
  });
});
