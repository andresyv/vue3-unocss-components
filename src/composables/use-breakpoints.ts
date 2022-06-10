import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import type { Ref } from "vue";
const breakpoints = useBreakpoints(breakpointsTailwind);

export function useTailwindBreakpoints(): {
  sm: Ref<boolean>;
  md: Ref<boolean>;
  lg: Ref<boolean>;
  xl: Ref<boolean>;
  xxl: Ref<boolean>;
  xxxl: Ref<boolean>;
} {
  return {
    sm: breakpoints.smaller("sm"),
    md: breakpoints.between("sm", "md"),
    lg: breakpoints.between("md", "lg"),
    xl: breakpoints.between("lg", "xl"),
    xxl: breakpoints.between("xl", "2xl"),
    xxxl: breakpoints["2xl"],
  };
}
