import { BsTrash3Fill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCopy } from "react-icons/ai";

const TodoCard = () => {
  return (
    <div className="todo-card">
      <div className="flex justify-between items-center">
        <p className="text-slate-500 dark:text-slate-300 font-medium">Meat lorem</p>

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
        <p className="text-[11px] font-medium">Jul, 20 2023</p>
      </div>

      <div className="flex justify-end">
        <p className="font-semibold text-xs text-green-400">Groceries</p>
      </div>
    </div>
  );
};

export default TodoCard;
