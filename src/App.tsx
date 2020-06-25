import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const initialTodo: Array<Todo> = [];

function App() {
  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo: ToogleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newtodo) => {
    newtodo.trim() !== "" &&
      setTodos([...todos, { text: newtodo, complete: false }]);
  };
  return (
    <React.Fragment>
      <h2 className="ml-4">
        TODOS <h3 className="badge badge-pill badge-primary">{todos.length}</h3>
      </h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
