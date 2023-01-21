type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Merge<T, U> = {
  [Key in keyof U | keyof T]: Key extends keyof T
    ? T[Key]
    : Key extends keyof U
    ? U[Key]
    : never;
};

type Result = Merge<foo, coo>;
