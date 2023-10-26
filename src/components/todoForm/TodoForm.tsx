import React, { useState, ChangeEvent, FormEvent } from "react";
import { Todo } from "../../interfaces/types";

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const todo: Todo = {
        todo: newTodo,
        date: new Date().toISOString(),
      };
      addTodo(todo);
      setNewTodo("");
    }
  };

  return (
    <div className="todo-form">
      <form className="w-full flex" onSubmit={handleSubmit}>
        <input
          className="todo-form__todo"
          type="text"
          placeholder="Add Todo..."
          value={newTodo}
          onChange={handleInputChange}
        />

        <button type="submit" className="todo-form__button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
