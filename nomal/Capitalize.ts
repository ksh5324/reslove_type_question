type CustomCapitalize<T extends string> = T extends `${infer T}${infer Rest}`
  ? `${Uppercase<T>}${Rest}`
  : never;
type capitalized = CustomCapitalize<"hello world">;
