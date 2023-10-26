import React, { useState, ChangeEvent, FormEvent } from "react";
import { Todo } from "../../interfaces/types";

interface TodoFormProps {
  addTodo: ({ todo, category }: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [todoCat, setTodoCat] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoCat(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      const todo: Todo = {
        todo: newTodo,
        category: todoCat,
        date: new Date().toISOString(),
      };
      addTodo(todo);
      setNewTodo("");
      setTodoCat("");
    }
  };

  return (
    <div className="todo-form">
      <form className="w-full flex flex-col" onSubmit={handleSubmit}>
        <input
          className="todo-form__todo"
          type="text"
          placeholder="Add Todo..."
          value={newTodo}
          onChange={handleInputChange}
          required
        />
        <input
          className="todo-form__todo"
          type="text"
          placeholder="Add Todo Category..."
          value={todoCat}
          onChange={handleCatChange}
        />

        <button type="submit" className="todo-form__button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
