type LengthOfString<
  T extends string,
  U extends any[] = []
> = T extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...U, First]>
  : U["length"];

type a = LengthOfString<"123">;
