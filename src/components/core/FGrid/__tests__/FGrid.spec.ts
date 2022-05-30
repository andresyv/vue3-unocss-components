import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FGrid from "../FGrid.vue";

describe("FGrid", () => {
  expect(FGrid).toBeTruthy();

  describe("When no props are passed to component #layout #ui", () => {
    test("default slot is rendered inside a <div> with default 'grid' and 'grid-cols-12' classes", () => {
      const wrapper = mount(FGrid, {
        slots: {
          default: "<div>Test grid</div>",
        },
      });
      expect(wrapper.find("div").text()).toContain("Test grid");
      expect(wrapper.classes()).toContain("grid");
      expect(wrapper.classes()).toContain("grid-cols-12");
    });
  });

  describe("When props are passed to component #layout #ui", () => {
    test("default slot is rendered with breakpoints class modifiers", () => {
      const wrapper = mount(FGrid, {
        slots: {
          default: "<div>Test grid</div>",
        },
        props: {
          cols: 10,
          sm: 6,
          md: 6,
          lg: 8,
          xl: 10,
          xxl: 12,
        },
      });

      expect(wrapper.classes()).toContain("grid");
      expect(wrapper.classes()).toContain("grid-cols-10");
      expect(wrapper.classes()).toContain("md:grid-cols-6");
      expect(wrapper.classes()).toContain("lg:grid-cols-8");
      expect(wrapper.classes()).toContain("xl:grid-cols-10");
      expect(wrapper.classes()).toContain("2xl:grid-cols-12");
    });
  });
});
