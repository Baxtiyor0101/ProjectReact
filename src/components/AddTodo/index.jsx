import React, { useState } from "react";



const initialTodos = [
  {
    id: "a",
    task: "Learn React",
    complete: true,
  },
  {
    id: "b",
    task: "Learn Firebase",
    complete: true,
  },
  {
    id: "c",
    task: "Learn GraphQL",
    complete: false,
  },
];

function AddTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    if (task) {
      setTodos(todos.concat({ id: "d", task, complete: false }));
    }
    setTask("");
    event.preventDefault();
  };

  return (
    <div>
      <span>reference:</span>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>{todo.task}</label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
