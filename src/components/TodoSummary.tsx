import React from "react";
import { Todo } from "../types/todo";

type TodoSummaryProps = {
  todos: Todo[];
  deleteAllCompleted: () => void;
};

const TodoSummary = ({ todos, deleteAllCompleted }: TodoSummaryProps) => {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length} / {todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete all completed
        </button>
      )}
      {/* <button
        onClick={deleteAllCompleted}
        className="bg-red-500 text-white px-3 py-1 rounded-md"
      >
        Delete all completed
      </button> */}
    </div>
  );
};

export default TodoSummary;
