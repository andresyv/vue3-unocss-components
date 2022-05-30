import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FButton from "../FButton.vue";

describe("FButton", () => {
  expect(FButton).toBeTruthy();

  describe("Component render correctly", () => {
    it("renders with text in default slot", () => {
      const wrapper = mount(FButton, { slots: { default: "Test" } });

      expect(wrapper.find("button").text()).toBe("Test");
    });

    it("renders with variant classes", () => {
      const wrapper = mount(FButton, {
        slots: { default: "Test" },
        props: {
          block: true,
          flat: true,
          rounded: true,
          outline: true,
          color: "primary",
        },
      });

      expect(wrapper.classes()).toContain("w-full");
      expect(wrapper.classes()).toContain("!shadow-none");
      expect(wrapper.classes()).toContain("f-button--primary");
      expect(wrapper.classes()).toContain("f-button--rounded");
      expect(wrapper.classes()).toContain("f-button--outline");
    });
  });
});
