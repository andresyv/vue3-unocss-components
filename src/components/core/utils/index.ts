export const classGenerator = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");

export * from "./validators";
