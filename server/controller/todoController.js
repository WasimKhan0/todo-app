const Todo = require("../model/todoModel");

exports.addTodo = async (req, res) => {
  try {
    const list = await Todo.create({
      data: req.body.data,
    });
    const newList = await list.save();
    res.status(200).json(newList);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getTodo = async (req, res) => {
  try {
    const list = await Todo.find({}).sort({ createdAt: -1 });
    console.log(list);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.toggleTodo = async (req, res) => {
  try {
    const todoRef = await Todo.findById( req.params.id );

   const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );
    await todo.save();
    
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
};


exports.updateTodo = async (req, res) => {
  try {
    
   await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { data:  req.body.data}
    );
    // await todo.save();
    const todo = await Todo.findById(req.params.id)
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
};
