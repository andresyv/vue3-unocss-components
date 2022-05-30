import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import FForm from "../FForm.vue";

describe("FForm", () => {
  describe("Component renders correctly", () => {
    it("renders", () => {
      const wrapper = mount(FForm);
      expect(wrapper.find("form").exists()).toBeTruthy();
    });
  });
});
