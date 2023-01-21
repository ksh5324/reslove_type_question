type TrimLeft<T extends string> = T extends `${infer First}${infer Rest}`
  ? First extends " "
    ? TrimLeft<Rest>
    : `${First}${Rest}`
  : never;

type trimed = TrimLeft<"  Hello World  ">;
