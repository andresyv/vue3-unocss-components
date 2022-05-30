/* eslint-disable @typescript-eslint/ban-ts-comment */

import { describe, it, expect } from "vitest";

import FAutocomplete from "../FAutocomplete.vue";

import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import waitForExpect from "wait-for-expect";

describe("FAutocomplete", () => {
  const wrapper = mount(FAutocomplete, {
    props: {
      label: "My autocomplete",
      name: "test",
      items: [{ label: "Salamanca", value: "Salamanca" }],
      rules: (value: string) => {
        if (!value || !value.length) {
          return "Field test is required";
        }
        return true;
      },
    },
  });
  describe("Component renders correctly", () => {
    it("renders", () => {
      expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
      expect(wrapper.find("label").html()).toContain("My autocomplete");
    });
  });
  describe("Component sets value and validate", () => {
    it("set value on input and emits change event", async () => {
      const textInput = wrapper.find('input[type="text"]');
      await textInput.setValue("My name");
      expect(wrapper.emitted("change")).toHaveLength(1);
      // @ts-ignore
      expect(textInput.element.value).toBe("My name");
      expect(wrapper.find("label").text()).toBe("My autocomplete");
    });

    it("validates", async () => {
      const textInput = wrapper.find('input[type="text"]');
      textInput.setValue("");
      await flushPromises();
      await waitForExpect(() => {
        expect(wrapper.find(".f-autocomplete--error").text()).toBe(
          "Field test is required"
        );
      });
    });
    it("autocompletes", async () => {
      const textInput = wrapper.find('input[type="text"]');
      textInput.setValue("sa");
      textInput.trigger("focus");
      await flushPromises();
      await waitForExpect(() => {
        const list = wrapper.find("ul");
        expect(list.html()).toContain("Salamanca");
      });
    });
  });
});
