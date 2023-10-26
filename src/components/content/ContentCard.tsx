import React from "react";
import TodoCard from "./TodoCard";

const ContentCard = () => {
  return (
    <div className="content-card">
      <div className="content-card__header">
        <div className="content-card__header-left">
          <p className="">Todo</p>
          <p className="rounded-full px-3 py-1 border dark:border-slate-500 ml-3">
            1
          </p>
        </div>

        <button className="content-card__clear-button">Clear All</button>
      </div>

      <hr className="dark:border-slate-500 mt-5" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <TodoCard />
      </div>
    </div>
  );
};

export default ContentCard;
