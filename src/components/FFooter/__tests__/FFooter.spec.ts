import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import FFooter from "../FFooter.vue";

describe("FFooter", () => {
  it("renders properly", () => {
    const wrapper = mount(FFooter, { props: { title: "Test footer" } });
    expect(wrapper.text()).toContain("Test footer");
  });
});
