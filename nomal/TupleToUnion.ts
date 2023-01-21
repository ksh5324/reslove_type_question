type Arr = ["1", "2", "3"];

type TupleToUnion<T extends any[]> = T[any];

type Test = TupleToUnion<Arr>;
