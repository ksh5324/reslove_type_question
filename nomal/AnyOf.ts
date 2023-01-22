type AnyOf<T extends any[]> = T extends [infer Current, ...infer Rest]
  ? Current extends false | 0 | "" | [] | Record<keyof any, never>
    ? AnyOf<Rest>
    : true
  : false;

type Sample1 = AnyOf<[1, "", false, [], {}]>;
type Sample2 = AnyOf<[0, "", false, [], {}]>;
