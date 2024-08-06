import { ITodo } from "../types/data";
import React from "react";
import { TodoList } from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodos = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} ref={inputRef} />
        <button onClick={() => addTodos()}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};
export { App };
