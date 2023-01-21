type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...infer U, any] ? [...U] : never;

type re1 = Pop<arr1>;
type re2 = Pop<arr2>;
