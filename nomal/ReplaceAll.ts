type ReplaceAll<
  T extends string,
  U extends string,
  K extends string
> = T extends `${infer Front}${U}${infer Back}`
  ? ReplaceAll<`${Front}${K}${Back}`, U, K>
  : T;

type replaced = ReplaceAll<"t y p e s", " ", "">;
