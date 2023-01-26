type Includes<T extends any[], U> = T extends [infer R, ...infer Z]
  ? Equals<R, U> extends true
    ? true
    : Includes<Z, U>
  : false;

type Equals<X, Y> = X extends Y ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana", ""], "Dio">;

type Includes2<T extends any[], U> = U extends T[number] ? true : false;
type isPillarMen2 = Includes2<
  ["Kars", "Esidisi", "Wamuu", "Santana", ""],
  "Kars"
>;
