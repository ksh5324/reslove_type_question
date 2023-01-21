type AppendToObject<T, U extends string, K> = T & {
  [a in U]: K;
};
type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>;

const a: Result = {
  id: "1",
  value: 4,
};
