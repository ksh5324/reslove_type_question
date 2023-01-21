const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...rest: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? { [r in keyof R]: R[r] }
  : null;
type FunctionParamsType = MyParameters<typeof foo>;
