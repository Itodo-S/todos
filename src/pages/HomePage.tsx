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
    </div>
  );
};

export default HomePage;
