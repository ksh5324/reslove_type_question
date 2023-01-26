interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, U extends keyof T> = { [t in Exclude<keyof T, U>]: T[t] };
type MyOmit2<T, U extends keyof T> = { [t in keyof T as Exclude<t, U>]: T[t] };
type MyOmit3<T, U extends keyof T> = {
  [t in keyof T as t extends U ? never : t]: T[t];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;
type TodoPreview2 = MyOmit2<Todo, "title">;
type TodoPreview3 = MyOmit2<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
