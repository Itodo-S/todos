import React from "react";
import TodoCard from "./TodoCard";

interface Todo {
  todo: string;
  date: string;
}

interface ContentCardProps {
  todos: Todo[];
}

const ContentCard: React.FC<ContentCardProps> = ({ todos }) => {
  return (
    <div className="content-card">
      <div className="content-card__header">
        <div className="content-card__header-left">
          <p className="">Todo</p>
          <div className="rounded-full px-2 py-1 border dark:border-slate-500 ml-3">
            <p className="text-xs">1</p>
          </div>
        </div>

        <button className="content-card__clear-button">Clear All</button>
      </div>

      <hr className="dark:border-slate-500 mt-5" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        {todos.map((todo, index) => (
          <TodoCard key={index} date={todo.date} todo={todo.todo} />
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
