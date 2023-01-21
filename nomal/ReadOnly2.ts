interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, U extends keyof T> = {
  readonly [u in U]: T[u];
} & {
  [t in Exclude<keyof T, U>]: T[t];
};

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.completed = true;
// todo.description = "sdf"
