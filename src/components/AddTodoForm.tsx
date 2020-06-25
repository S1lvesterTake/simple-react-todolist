import React, { useState, ChangeEvent, FormEvent } from "react";

export interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="form-inline">
      <input
        className="form-control ml-4 "
        type="text"
        onChange={handleChange}
        value={newTodo}
      />
      <button
        className="btn btn-primary btn-sm ml-2"
        type="submit"
        onClick={handleSubmit}
      >
        Add Button
      </button>
    </form>
  );
};

export default AddTodoForm;
