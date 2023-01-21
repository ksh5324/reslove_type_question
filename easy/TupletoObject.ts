const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type TupleToObject<T extends readonly (number | string)[]> = {
  [t in T[number]]: t;
};
type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
