type Trim<
  T extends string,
  U extends string = ""
> = T extends `${infer Current}${infer Rest}`
  ? Current extends " "
    ? `${Trim<Rest, U>}`
    : `${Trim<Rest, `${U}${Current}`>}`
  : U;

type Trim2<T extends string> = T extends
  | `${" "}${infer Rest}`
  | `${infer Rest}${" "}`
  ? Trim2<Rest>
  : T;

type trimmed = Trim<"  Hello World  ">;
type trimmed2 = Trim2<"  Hello World  ">;
