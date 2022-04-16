import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";

import FFooter from "../FFooter.vue";

describe("FFooter", () => {
  expect(FFooter).toBeTruthy();

  describe("Component render #layout #ui", () => {
    test("renders properly", () => {
      const wrapper = mount(FFooter, { props: { title: "Test footer" } });
      expect(wrapper.text()).toContain("Test footer");
    });
  });
});
