declare const config: Chainable;

type Chainable<T extends Record<string, any> = {}> = {
  option<Key extends string, Value extends any>(
    key: Key,
    value: Value
  ): Chainable<{ [t in keyof T]: T[t] } & { [v in Key]: Value }>;
  get(): T;
};

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// 결과는 다음과 같습니다:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
