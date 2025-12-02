import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Buy some milk", completed: false },
    { text: "Do my homework", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTask = { text: newTodo.trim(), completed: false };
    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1 className="title">Todo's</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            onDoubleClick={() => deleteTodo(index)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>

      <form onSubmit={addTodo} className="todo-form">
        <label htmlFor="newTodo">Add a new todo:</label>
        <input
          type="text"
          id="newTodo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter task"
        />
      </form>
    </div>
  );
}

export default App;
