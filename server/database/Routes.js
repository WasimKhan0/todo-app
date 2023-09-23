const express = require("express");
const { addTodo, getTodo, toggleTodo, updateTodo } = require("../controller/todoController");

const router = express.Router();
// const addTodo = require("../controller/todoController")
// const getTodo = require("../controller/todoController")


router.post("/todos",addTodo)
router.get("/todo",getTodo)
router.get("/todo/:id",toggleTodo)
router.put("/todo/:id",updateTodo)


module.exports =  router;