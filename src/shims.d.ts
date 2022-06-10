/* eslint-disable @typescript-eslint/ban-types */
declare module "*.vue" {
  import { type DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

export declare type Breakpoints<K extends string = string> = Record<
  K,
  number | string
>;
/**
 * Reactively viewport breakpoints
 *
 * @see https://vueuse.org/useBreakpoints
 * @param options
 */
export declare function useBreakpoints<K extends string>(
  breakpoints: Breakpoints<K>,
  options?: ConfigurableWindow
): {
  greater: (k: K) => Ref<boolean>;
  smaller(k: K): Ref<boolean>;
  between(a: K, b: K): Ref<boolean>;
  isGreater(k: K): boolean;
  isSmaller(k: K): boolean;
  isInBetween(a: K, b: K): boolean;
} & Record<K, Ref<boolean>>;
export declare type UseBreakpointsReturn<K extends string = string> = {
  greater: (k: K) => Ref<boolean>;
  smaller(k: K): Ref<boolean>;
  between(a: K, b: K): Ref<boolean>;
  isGreater(k: K): boolean;
  isSmaller(k: K): boolean;
  isInBetween(a: K, b: K): boolean;
} & Record<K, Ref<boolean>>;
