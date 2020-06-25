import React from "react";
import "../TodoListItem.css";

export interface TodoListItemProps {
  todo: Todo;
  toogleTodo: ToogleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toogleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          className="mr-2"
          type="checkbox"
          checked={todo.complete}
          onChange={() => toogleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
