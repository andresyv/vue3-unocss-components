import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FGridItem from "../FGridItem.vue";

describe("FGridItem", () => {
  it("default slot is rendered inside a <div> with default 'grid' and 'grid-cols-12' classes", () => {
    const wrapper = mount(FGridItem, {
      slots: {
        default: "<div>Test grid item</div>",
      },
    });
    expect(wrapper.find("div").text()).toContain("Test grid item");
    expect(wrapper.classes()).toContain("col-span-12");
  });

  it("default slot is rendered with breakpoints class modifiers", () => {
    const wrapper = mount(FGridItem, {
      slots: {
        default: "<div>Test grid item</div>",
      },
      props: {
        span: 10,
        sm: 6,
        md: 6,
        lg: 8,
        xl: 10,
        xxl: 12,
      },
    });

    expect(wrapper.classes()).toContain("col-span-10");
    expect(wrapper.classes()).toContain("md:col-span-6");
    expect(wrapper.classes()).toContain("lg:col-span-8");
    expect(wrapper.classes()).toContain("xl:col-span-10");
    expect(wrapper.classes()).toContain("2xl:col-span-12");
  });
});
