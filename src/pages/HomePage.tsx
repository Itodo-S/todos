import { Header } from "../components/header";
import { TodoForm } from "../components/todoForm";
import { ContentCard } from "../components/content";
import { useState } from "react";
import { Todo } from "../interfaces/types";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <div className="flex flex-col items-center w-full dark:bg-gray-800 transition-all duration-500 h-screen">
      <Header />

      <TodoForm addTodo={addTodo} />

      <ContentCard todos={todos} />
    </div>
  );
};

export default HomePage;
