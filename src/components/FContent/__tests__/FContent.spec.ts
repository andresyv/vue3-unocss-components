import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FContent from "../FContent.vue";

describe("FContent", () => {
  it("default slot is rendered inside a <main> tag", () => {
    const wrapper = mount(FContent, {
      slots: {
        default: "Test content",
      },
    });

    expect(wrapper.find("main").text()).toContain("Test content");
  });
});
