const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U : null;
declare function PromiseAll<T extends any[] = []>(
  array: readonly [...T]
): Promise<{
  [t in keyof T]: T[t] extends Promise<any> ? Awaited<T[t]> : T[t];
}>;

const p = PromiseAll([promise1, promise2, promise3] as const);
