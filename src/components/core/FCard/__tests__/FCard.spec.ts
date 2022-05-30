import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";

import FCard from "../FCard.vue";
import { vi } from "vitest";

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

describe("FCard", () => {
  expect(FCard).toBeTruthy();

  describe("Component exists and render slots correctly #layout #ui", () => {
    test("render properly and default slot is rendered inside card body", () => {
      const wrapper = mount(FCard, {
        slots: {
          default: "<div>Test card</div>",
        },
      });
      expect(wrapper.html()).toContain("<div>Test card</div>");
    });

    test("render header and action slots correctly", () => {
      const wrapper = mount(FCard, {
        slots: {
          header: "<template #header><div>Test card title</div></template>",
          actions: "<template #actions><div>Test card actions</div></template>",
        },
      });

      expect(wrapper.html()).toContain("Test card title");
      expect(wrapper.html()).toContain("Test card actions");
    });

    test("render title prop", () => {
      const wrapper = mount(FCard, { props: { title: "Test card title" } });
      expect(wrapper.html()).toContain("Test card title");
    });
  });

  describe("Component image #layout #ui #images", () => {
    test("renders image when img prop is passed", () => {
      const img =
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2175&q=80";
      const wrapper = mount(FCard, {
        props: { title: "Test card", img },
      });

      expect(wrapper.find("div [role=img]").exists()).toBeTruthy();
    });

    test("doesn't renders any image when img prop is undefined", () => {
      const wrapper = mount(FCard, {
        props: { title: "Test card" },
      });

      expect(wrapper.find("div[role=img]").exists()).toBeFalsy();
    });
  });
});
