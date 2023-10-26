import { Header } from "../components/header";
import { TodoForm } from "../components/todoForm";
import { ContentCard } from "../components/content";
import React from "react";
import { Todo } from "../interfaces/types";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Load todos from local storage on initial render
  const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = React.useState<Todo[]>(initialTodos);

  // Save todos to local storage whenever todos change
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const clearAllTodos = () => {
    // Clear all todos and update local storage
    setTodos([]);
  };

  const onDeleteTodo = (index: number) => {
    // Delete the todo at the specified index
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center w-full dark:bg-gray-800 transition-all duration-500 min-h-screen">
      <Header />
      <TodoForm addTodo={addTodo} />
      <ContentCard
        todos={todos}
        clearAllTodos={clearAllTodos}
        onDeleteTodo={onDeleteTodo}
      />

      <footer className="mt-10 md:w-4/5 w-11/12  flex justify-between items-center">
        <p className="text-slate-500 text-xs">
          © 2023 Todos. All Rights Reserved.
        </p>

        <Link className="text-slate-500 text-xs" to="/about">
          About Page
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;
