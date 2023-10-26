import { BsTrash3Fill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCopy } from "react-icons/ai";

interface TodoCardProps {
  todo: string;
  date: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, date }) => {
  // Convert the input date string to a Date object
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="todo-card">
      <div className="flex justify-between items-center">
        <p className="text-slate-500 dark:text-slate-300 font-medium">{todo}</p>

        <div className="flex gap-1">
          <div className="icon-case border-green-500">
            <AiOutlineCopy color="green" />
          </div>
          <div className="icon-case border-blue-500">
            <FiEdit color="blue" />
          </div>
          <div className="icon-case border-red-500">
            <BsTrash3Fill color="red" />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-[11px] font-medium">{formattedDate}</p>
      </div>

      <div className="flex justify-end">
        <p className="font-semibold text-xs text-green-400">Groceries</p>
      </div>
    </div>
  );
};

export default TodoCard;
