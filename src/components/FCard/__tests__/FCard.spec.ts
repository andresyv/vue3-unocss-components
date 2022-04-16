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

      expect(wrapper.find(".f-card--title").text()).toContain(
        "Test card title"
      );
      expect(wrapper.find(".f-card--actions").text()).toContain(
        "Test card actions"
      );
    });

    test("render title prop in header slot", () => {
      const wrapper = mount(FCard, { props: { title: "Test card title" } });
      expect(wrapper.find(".f-card--title").text()).toContain(
        "Test card title"
      );
    });
  });

  describe("Component variants #layout #ui", () => {
    test("component has primary class when variant is set to 'primary'", () => {
      const wrapper = mount(FCard, {
        props: { title: "Test card", variant: "primary" },
      });
      expect(wrapper.classes()).toContain("f-card--primary");
    });

    test("component has gradient class when variant is set to 'gradient'", () => {
      const wrapper = mount(FCard, {
        props: { title: "Test card", variant: "gradient" },
      });
      expect(wrapper.classes()).toContain("f-card--gradient");
    });
  });

  describe("Component image #layout #ui #images", () => {
    test("renders image when img prop is passed", () => {
      const img =
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2175&q=80";
      const wrapper = mount(FCard, {
        props: { title: "Test card", img },
      });

      expect(wrapper.find(".f-card--image").exists()).toBeTruthy();
    });

    test("doesn't renders any image when img prop is undefined", () => {
      const wrapper = mount(FCard, {
        props: { title: "Test card" },
      });

      expect(wrapper.find(".f-card--image").exists()).toBeFalsy();
    });
  });
});
