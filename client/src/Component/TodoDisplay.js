import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "../redux/actions";
import TodoList from "./TodoList";
import "../App.css";
const TodoDisplay = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log("arr->", todos);
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <article>
      {todos.map((todo) => (
        <TodoList id={todo.id} todo={todo} />
      ))}
    </article>
  );
};

export default TodoDisplay;
