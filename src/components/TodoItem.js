import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import red from "@material-ui/core/colors/red";
import { deleteTodo, toggleChecked } from "../store/actions";

const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-todo">
      <input type="checkbox" onClick={() => dispatch(toggleChecked(id))} />
      <p
        style={{
          textDecorationLine: completed ? "line-through" : "none",
        }}
      >
        {text}
      </p>

      <IconButton
        aria-label="delete"
        onClick={() => dispatch(deleteTodo(id))}
        className="delete-button"
      >
        <DeleteIcon style={{ color: red[300] }} />
      </IconButton>
    </div>
  );
};

export default TodoItem;
