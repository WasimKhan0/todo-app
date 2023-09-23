import React, { useState } from "react";
import "../App.css";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
   
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter the todo..."
        className="input"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          
        }}
      ></input>
    </form>
  );
};
export default TodoForm;
