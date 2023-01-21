type ExampleType = Promise<string>;

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : null;

type Result = MyAwaited<ExampleType>;
// type Result2 = MyAwaited<string>;

type kkkk = Promise<ExampleType>;
type zz = kkkk["then"];
