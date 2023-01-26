type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any[], infer last] ? last : null;
type Last2<T extends any[]> = [never, ...T][T["length"]];

type tail1 = Last<arr1>;
type tail2 = Last<arr2>;

type tail3 = Last2<arr1>;
type tail4 = Last2<arr2>;
