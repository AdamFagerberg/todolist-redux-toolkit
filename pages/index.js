import { addTodo, toggleComplete, deleteTodo } from "@/redux/todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleAddTodo() {
    dispatch(addTodo(text));
    setText("");
  }

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <main>
      <div className="flex justify-center mt-10">
        <input
          className="border"
          type="text"
          value={text}
          onChange={handleOnChange}
        />
        <button onClick={handleAddTodo} className="mx-5">
          add Todo
        </button>
      </div>

      <div className="flex flex-row justify-center">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.todoTitle}
              <button
                className="mx-5"
                onClick={() => handleToggleComplete(todo.id)}
              >
                Complete
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
