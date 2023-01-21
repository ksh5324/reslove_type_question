type Unshift<T extends any[], U> = [U, ...T];
type ResultUnshift = Unshift<[1, 2], 0>;
