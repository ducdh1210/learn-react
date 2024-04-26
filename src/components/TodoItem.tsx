import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

type TodoItemProps = {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  // onRemove: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({
  todo,
  onCompletedChange,
  onDelete,
}: // onRemove,
TodoItemProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCompletedChange(todo.id, e.target.checked);
    // if (e.target.checked) {
    //   onRemove(todo.id);
    // }
  };
  return (
    <div className="flex items-center gap-1">
      <label className="flex grow gitems-center gap-3 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={todo.completed}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
