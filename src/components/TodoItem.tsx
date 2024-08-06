import React from "react";
import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  className?: string;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete } = props;
  return (
    <div>
      <input type="checkbox" checked={complete} />
      {title}
      <button>x</button>
    </div>
  );
};
