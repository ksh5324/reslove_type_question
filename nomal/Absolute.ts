type Test = -100;
type Absolute<T extends number | bigint | string> =
  `${T}` extends `-${infer Value}` ? `${Value}` : `${T}`;
type Result = Absolute<Test>;
