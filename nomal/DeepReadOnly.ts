type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type DeepReadonly<T> = {
  readonly [t in keyof T]: T[t] extends Record<any, unknown>
    ? DeepReadonly<T[t]>
    : T[t];
};

type Result = DeepReadonly<X>;
type ObjectType = Record<any, unknown>;
