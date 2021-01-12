import { ADD_TODO, DELETE_TODO, TOGGLE_CHECKED } from "./actionTypes";

const initalState = {
  todos: [],
};

export const reducer = (state = initalState, action) => {
  if (action.type === ADD_TODO) {
    const { id, text } = action.payload;
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          text,
          id,
        },
      ],
    };
  }
  if (action.type === DELETE_TODO) {
    const { id } = action.payload;
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    };
  }

  if (action.type === TOGGLE_CHECKED) {
    const { id } = action.payload;
    const index = state.todos.findIndex((todo) => todo.id === id);
    const newArray = [...state.todos];
    newArray[index].completed = !newArray[index].completed;

    return {
      ...state,
      todos: newArray,
    };
  }

  return state;
};
