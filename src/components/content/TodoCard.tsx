import { BsTrash3Fill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";

interface TodoCardProps {
  todo: string;
  category: string;
  date: string;
  onDelete: () => void;
  onCopy: (text: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  category,
  date,
  onDelete,
  onCopy,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleCopyTodo = () => {
    // Call the onCopy callback with the todo text
    onCopy(todo);
  };

  return (
    <div className="todo-card">
      <div className="flex justify-between items-center">
        <p className="text-slate-500 dark:text-slate-300 font-medium">{todo}</p>

        <div className="flex gap-1">
          <div className="icon-case border-green-500">
            <AiOutlineCopy color="green" onClick={handleCopyTodo} />
          </div>
          <div className="icon-case border-red-500" onClick={onDelete}>
            <BsTrash3Fill color="red" />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-[11px] font-medium">{formattedDate}</p>
      </div>

      <div className="flex justify-end">
        <p className="font-semibold text-xs text-green-400">{category}</p>
      </div>
    </div>
  );
};

export default TodoCard;
