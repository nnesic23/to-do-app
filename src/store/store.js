import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

const persistedState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : {};

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
