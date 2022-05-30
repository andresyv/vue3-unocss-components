/* eslint-disable @typescript-eslint/ban-ts-comment */

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";

import FInput from "../FInput.vue";

describe("FInput", () => {
  describe("Component renders correctly", () => {
    it("renders", () => {
      const wrapper = mount(FInput, {
        attrs: { type: "text" },
        props: { label: "My test input", name: "test" },
      });
      expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
      expect(wrapper.find("label").html()).toContain("My test input");
    });
  });

  describe("Component sets value and validate", () => {
    it("set value on input text and emits change event", async () => {
      const wrapper = mount(FInput, {
        attrs: { type: "text" },
        props: { label: "My test input", name: "test" },
      });
      const textInput = wrapper.find('input[type="text"]');
      await textInput.setValue("My name");
      expect(wrapper.emitted("change")).toHaveLength(1);
      // @ts-ignore
      expect(textInput.element.value).toBe("My name");
      expect(wrapper.find("label").text()).toBe("My test input");
    });

    it("validates", async () => {
      const wrapper = mount(FInput, {
        attrs: { type: "text" },
        props: {
          label: "My test input",
          name: "test",
          rules: (value: string) => {
            if (!value || !value.length) {
              return "Field test is required";
            }
            return true;
          },
        },
      });
      const textInput = wrapper.find('input[type="text"]');
      textInput.setValue("");
      await flushPromises();
      await waitForExpect(() => {
        expect(wrapper.find(".f-input--error").text()).toBe(
          "Field test is required"
        );
      });
    });
  });
});
