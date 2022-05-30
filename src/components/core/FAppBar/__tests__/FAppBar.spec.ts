import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FAppBar from "../FAppBar.vue";

describe("FAppBar", () => {
  expect(FAppBar).toBeTruthy();

  test("renders properly", () => {
    const wrapper = mount(FAppBar, { props: { title: "Test app" } });
    expect(wrapper.text()).toContain("Test app");
  });

  describe("When props are passed to component. #layout #ui", () => {
    test("component has fixed class when fixed prop is setted", () => {
      const wrapper = mount(FAppBar, {
        props: { title: "Test app", fixed: true },
      });

      expect(wrapper.classes()).toContain("f-app-bar--fixed");
    });

    test("component has primary class when variant is set to 'primary'", () => {
      const wrapper = mount(FAppBar, {
        props: { title: "Test app", variant: "primary" },
      });
      expect(wrapper.classes()).toContain("f-app-bar--primary");
    });

    test("component has accent class when variant is set to 'accent'", () => {
      const wrapper = mount(FAppBar, {
        props: { title: "Test app", variant: "accent" },
      });
      expect(wrapper.classes()).toContain("f-app-bar--accent");
    });

    test("component has transparent class when variant is set to 'transparent'", () => {
      const wrapper = mount(FAppBar, {
        props: { title: "Test app", variant: "transparent" },
      });
      expect(wrapper.classes()).toContain("f-app-bar--transparent");
    });

    test("component has dark class when dark prop is setted", () => {
      const wrapper = mount(FAppBar, {
        props: { title: "Test app", dark: true },
      });
      expect(wrapper.classes()).toContain("f-app-bar--dark");
    });
  });
});
