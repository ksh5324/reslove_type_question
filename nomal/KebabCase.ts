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

type KebabCase2<S> = S extends `${infer C}${infer T}`
  ? T extends Uncapitalize<T>
    ? `${Uncapitalize<C>}${KebabCase<T>}`
    : `${Uncapitalize<C>}-${KebabCase<T>}`
  : S;

type FooBarBaz2 = KebabCase2<"FooBarBaz">;
const foobarbaz2: FooBarBaz2 = "foo-bar-baz";

type DoNothing2 = KebabCase2<"do-nothing">;
const doNothing2: DoNothing2 = "do-nothing";
