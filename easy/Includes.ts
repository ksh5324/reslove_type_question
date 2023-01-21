type Includes<T extends any[], U> = T extends [infer R, ...infer Z]
  ? Equals<R, U> extends true
    ? true
    : Includes<Z, U>
  : false;

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana", ""], "Dio">;
