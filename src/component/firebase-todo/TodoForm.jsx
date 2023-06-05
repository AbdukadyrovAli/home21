import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo, fetchTodo } from "../../store/actions/firebase-todo-actions";

export const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };
    dispatch(postTodo(newTodo)).then(() => {
      dispatch(fetchTodo());
    });
    setTodoTitle('')
  };

  return (
    <div>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
