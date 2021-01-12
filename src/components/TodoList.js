import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import store from "../store/store";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState()));
  });

  return (
    <div>
      <h2>You have {todos.length} todos</h2>
      {todos.length !== 0
        ? todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              text={todo.text}
            />
          ))
        : null}
    </div>
  );
};

export default TodoList;
