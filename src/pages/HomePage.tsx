import { Header } from "../components/header";
import { TodoForm } from "../components/todoForm";
import { ContentCard } from "../components/content";
import React from "react";
import { Todo } from "../interfaces/types";

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

  return (
    <div className="flex flex-col items-center w-full dark:bg-gray-800 transition-all duration-500 h-screen">
      <Header />
      <TodoForm addTodo={addTodo} />
      <ContentCard todos={todos} clearAllTodos={clearAllTodos} />
    </div>
  );
};

export default HomePage;
