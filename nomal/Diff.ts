type Foo = {
  name: string;
  age: string;
};

type Bar = {
  name: string;
  age: string;
  gender: number;
};

type Diff<T, U> = {
  [t in keyof T | keyof U as Exclude<t, keyof T & keyof U>]: t extends keyof T
    ? T[t]
    : t extends keyof U
    ? U[t]
    : never;
};

type Diff2<T, U> = Omit<T & U, keyof T & keyof U>;

type Result = Diff<Foo, Bar>;
type Result2 = Diff2<Foo, Bar>;
