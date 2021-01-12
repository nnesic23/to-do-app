import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue === "") {
      alert("Please enter your to do!");
    } else {
      addTodo(inputValue);
    }
    setInputValue("");
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputValue(e.target.value);
      e.preventDefault();
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Your to do..."
        value={inputValue}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleAddTodo}
      >
        Add
      </Button>{" "}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
