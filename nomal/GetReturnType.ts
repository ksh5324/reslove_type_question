const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T extends (v: boolean) => any> = T extends (
  v: boolean
) => infer U
  ? U
  : null;
type a = MyReturnType<typeof fn>;
