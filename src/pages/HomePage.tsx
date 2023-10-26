import React from "react";
import { Header } from "../components/header";
import { TodoForm } from "../components/todoForm";
import { ContentCard } from "../components/content";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full dark:bg-gray-800 transition-all duration-500 h-screen">
      <Header />

      <TodoForm />

      <ContentCard />
    </div>
  );
};

export default HomePage;
