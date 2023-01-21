type Concat<T extends (number | string)[], U extends (number | string)[]> = [
  T[number],
  U[number]
];

type Concat2<T extends (number | string)[], U extends (number | string)[]> = [
  ...T,
  ...U
];

type ConcatResult = Concat<[1], [2]>;
