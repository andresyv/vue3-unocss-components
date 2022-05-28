function range({
  size,
  startAt = 1,
  prefix,
}: {
  size: number;
  startAt?: number;
  prefix: string;
}): string[] {
  return Array.from({ length: size }, (_, i) => `${prefix}-${i + startAt}`);
}

export default [
  ...range({ prefix: "grid-cols", size: 12, startAt: 1 }),
  ...range({ prefix: "sm:grid-cols", size: 12, startAt: 1 }),
  ...range({ prefix: "md:grid-cols", size: 12, startAt: 1 }),
  ...range({ prefix: "lg:grid-cols", size: 12, startAt: 1 }),
  ...range({ prefix: "xl:grid-cols", size: 12, startAt: 1 }),
  ...range({ prefix: "2xl:grid-cols", size: 12, startAt: 1 }),
  ...range({ prefix: "col-span", size: 12, startAt: 1 }),
  ...range({ prefix: "sm:col-span", size: 12, startAt: 1 }),
  ...range({ prefix: "md:col-span", size: 12, startAt: 1 }),
  ...range({ prefix: "lg:col-span", size: 12, startAt: 1 }),
  ...range({ prefix: "xl:col-span", size: 12, startAt: 1 }),
  ...range({ prefix: "2xl:col-span", size: 12, startAt: 1 }),
  ...range({ prefix: "gap", size: 4, startAt: 1 }),
];
