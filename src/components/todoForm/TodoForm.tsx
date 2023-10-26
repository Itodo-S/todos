import React from "react";

const TodoForm = () => {
  return (
    <div className="todo-form">
      <form className="w-full flex">
        <input
          className="todo-form__todo"
          type="text"
          placeholder="Add Todo..."
        />

        <button className="todo-form__button">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
