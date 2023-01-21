type Test = "123";
type StringToUnion<
  T extends string,
  U extends any[] = []
> = T extends `${infer Current}${infer Rest}`
  ? StringToUnion<Rest, [...U, Current]>
  : U[any];

type Result = StringToUnion<Test>;
