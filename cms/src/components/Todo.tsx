import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CMS Todo</h1>
      <div className="flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 mr-2 flex-grow"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2">
          Add Todo
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="border-b p-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
