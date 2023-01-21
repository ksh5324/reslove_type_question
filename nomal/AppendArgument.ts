type Fn = (a: number, b: string) => number;

type AppendArgument<T, U> = T extends (...args: infer Args) => infer Return
  ? (...args: [...Args, U]) => Return
  : never;

type Result = AppendArgument<Fn, boolean>;
