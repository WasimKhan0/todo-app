const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/toDo-db')
.then(()=>console.log("ok"))
.catch((e)=>console.log(e));

