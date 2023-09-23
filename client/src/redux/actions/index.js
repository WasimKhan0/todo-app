import axios from "axios";
import { ADDNEW_TODO, GETALL_TODO,TOGGLE_TODO ,UPDATE_TODO} from "./Type";
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/todos", { data });
   
    //Action ko dispatch kr skte hoojo sidha reducer me jaega
   
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (err) {
    console.log("Error while calling addNewTodo API", err.message);
  }
};

export const getAllTodo = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/todo");
    //Action ko dispatch kr skte hoojo sidha reducer me jaega
    dispatch({ type: GETALL_TODO, payload: res.data });
    // console.log("all todo ->",res.data);
  } catch (err) {
    console.log("Error while calling addNewTodo API", err.message);
  }
};


export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/todo/${id}`);
    //Action ko dispatch kr skte hoojo sidha reducer me jaega
    dispatch({ type: TOGGLE_TODO, payload: res.data });
    // console.log("all todo ->",res.data);
  } catch (err) {
    console.log("Error while calling addNewTodo API", err.message);
  }
};

export const updateTodo = (id,data) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8000/todo/${id}`,{data});
    //Action ko dispatch kr skte hoojo sidha reducer me jaega
    dispatch({ type: UPDATE_TODO, payload: res.data });
    // console.log("all todo ->",res.data);
  } catch (err) {
    console.log("Error while calling addNewTodo API", err.message);
  }
};