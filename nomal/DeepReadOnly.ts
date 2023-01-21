type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type DeepReadonly<T> = {
  readonly [t in keyof T]: T[t] extends {} ? DeepReadonly<T[t]> : T[t];
};

type Todo = DeepReadonly<X>;
