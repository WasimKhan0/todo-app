import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo } from "../redux/actions";

const TodoList = ({ id, todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e)=>{
    e.preventDefault();
    setEditing(prev => !prev);
    dispatch(updateTodo(todo._id, text))

  }
  return (
    <h3
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span className="text" style={{ display: editing ? "none" : "" }}>
        {todo.data}
      </span>

      <form 
      style={{ display: editing ? "inline" : "none" }}
      onSubmit={onFormSubmit}
      >

        <input type="text"
         value={text} 
         className="edit-todo"
         onChange={(e)=>{setText(e.target.value)}}
         />

      </form>

      <span className="icon">
        <i class="fa-solid fa-trash"></i>
      </span>
      <span className="icon" onClick={() => setEditing((prev) => !prev)}>
        <i class="fa-solid fa-pen"></i>
      </span>
    </h3>
  );
};

export default TodoList;
