const mongoose = require("mongoose");

const TodoShema = new mongoose.Schema({
    data:{
       type:String,
       required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const todo = new mongoose.model("todo",TodoShema);
module.exports = todo;