import { ADD_TODO, DELETE_TODO, TOGGLE_CHECKED } from "./actionTypes";

let nextId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextId,
    text,
    completed: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleChecked = (id) => ({
  type: TOGGLE_CHECKED,
  payload: {
    id,
  },
});
