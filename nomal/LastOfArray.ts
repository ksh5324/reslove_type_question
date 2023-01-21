type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any[], infer last] ? last : null;

type tail1 = Last<arr1>;
type tail2 = Last<arr2>;
