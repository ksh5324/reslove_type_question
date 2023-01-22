type KebabCase<
  T extends string,
  U extends string = ""
> = T extends `${infer Current}${infer Rest}`
  ? Current extends Lowercase<Current>
    ? KebabCase<Rest, `${U}${Current}`>
    : KebabCase<Rest, `${U extends "" ? `${U}` : `${U}-`}${Lowercase<Current>}`>
  : U;

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";
