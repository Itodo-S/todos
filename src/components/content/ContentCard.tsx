import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { toast } from "react-toastify";

interface Todo {
  todo: string;
  date: string;
}

interface ContentCardProps {
  todos: Todo[];
  clearAllTodos: () => void;
  onDeleteTodo: (index: number) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  todos,
  clearAllTodos,
  onDeleteTodo,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCopyTodo = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`Text copied to clipboard: ${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div className="content-card">
      <div className="content-card__header">
        <div className="content-card__header-left">
          <p className="">Todo</p>
          <div className="rounded-full px-2 py-1 border dark:border-slate-500 ml-3">
            <p className="text-xs">{filteredTodos.length}</p>
          </div>
        </div>

        <div className="content-card__search">
          <input
            type="text"
            className=""
            placeholder="Search todos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <button onClick={clearAllTodos} className="content-card__clear-button">
          Clear All
        </button>
      </div>

      <hr className="dark:border-slate-500 mt-5" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        {filteredTodos.map((todo, index) => (
          <TodoCard
            key={index}
            date={todo.date}
            todo={todo.todo}
            onDelete={() => onDeleteTodo(index)}
            onCopy={handleCopyTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
