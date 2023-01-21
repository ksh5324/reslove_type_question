type If<T extends boolean, U, K> = T extends true ? U : K;

type A = If<true, "a", "b">;
type B = If<false, "a", "b">;
