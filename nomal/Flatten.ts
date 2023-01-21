type Flatten<T> = T extends [infer Current, ...infer Rest]
  ? Current extends any[]
    ? [...Flatten<Current>, ...Flatten<Rest>]
    : [Current, ...Flatten<Rest>]
  : T;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]], [23, 3, "df"]]>;
