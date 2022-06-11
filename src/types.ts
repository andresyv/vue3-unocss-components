export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type LoginInput = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
};
