type IsUnion<T, C = T> = T extends T
  ? // use tuple avoid type distribute, from https://github.com/type-challenges/type-challenges/issues/1227#issuecomment-824176815
    [C] extends [T]
    ? false
    : true
  : never;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
