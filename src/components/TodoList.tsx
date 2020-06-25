import React from "react";
import TodoListItem from "./TodoListItem";

export interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToogleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toogleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;
