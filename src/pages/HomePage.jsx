import React from "react";
import { Header } from "../components/header";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full dark:bg-gray-800 transition-all duration-500 h-screen">
      <Header />
    </div>
  );
};

export default HomePage;
