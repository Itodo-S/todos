import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { toast } from "react-toastify";

interface Todo {
  todo: string;
  category: string;
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
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const categories = Array.from(
    new Set(todos.map((todo) => todo.category))
  ).filter((category) => category);

  const filteredTodos = todos
    .filter((todo) =>
      todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (todo) =>
        selectedCategory === "" ||
        todo.category.toLowerCase() === selectedCategory.toLowerCase()
    );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
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

      {filteredTodos.length === 0 ? (
        <p className="text-center font-bold text-2xl text-zinc-500 mt-5">
          No todo added yet.
        </p>
      ) : (
        <>
          {categories.length > 0 && (
            <div className="mt-5">
              <select
                className="border outline-none rounded-md h-9 px-2 w-full md:w-60 bg-transparent dark:border-slate-500 text-slate-500"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Filter Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            {filteredTodos.map((todo, index) => (
              <TodoCard
                key={index}
                date={todo.date}
                todo={todo.todo}
                category={todo.category}
                onDelete={() => onDeleteTodo(index)}
                onCopy={handleCopyTodo}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ContentCard;
