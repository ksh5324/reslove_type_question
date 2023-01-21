type Replace<
  T extends string,
  U extends string,
  K extends string
> = T extends `${infer Front}${U}${infer Back}` ? `${Front}${K}${Back}` : never;

type replaced = Replace<"types are fun!", "fun", "awesome">;
