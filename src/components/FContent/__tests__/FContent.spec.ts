import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FContent from "../FContent.vue";

describe("FContent", () => {
  expect(FContent).toBeTruthy();

  test("default slot is rendered inside a <main> tag", () => {
    const wrapper = mount(FContent, {
      slots: {
        default: "Test content",
      },
    });

    expect(wrapper.find("main").text()).toContain("Test content");
  });
});
