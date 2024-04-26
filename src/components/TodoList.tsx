import TodoItem from "./TodoItem";
import { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div>
        {todos.length === 0 && (
          <p className="text-center text-sm text-gray-500">No todos yet.</p>
        )}
      </div>
    </>
  );
};
export default TodoList;
