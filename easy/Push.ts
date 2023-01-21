type Push<T extends any[], U> = [...T, U];
type ResultPush = Push<[1, 2], "3">;
