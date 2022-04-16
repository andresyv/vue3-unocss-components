export const classGenerator = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");
