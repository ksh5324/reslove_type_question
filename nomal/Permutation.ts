type Permutation<T, U extends any[] = []> = U extends [T]
  ? U
  : Permutation<T, [...U, T]>;

type perm = Permutation<"A" | "B" | "C">;

/**
 * @todo
 * 해결 못함
 */
