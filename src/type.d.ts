type Todo = {
  text: string;
  complete: boolean;
};

type ToogleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
