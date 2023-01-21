interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, U extends keyof T> = { [t in Exclude<keyof T, U>]: T[t] };

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
