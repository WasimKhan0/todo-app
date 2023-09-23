const express = require("express");
const app = express();
const cors = require("cors");
// const dotenv = require("dotenv");
const router = require("./database/Routes");
require("./database/db");

// dotenv.config();
// const PORT  = process.env.PORT || 8000;

app.use(cors()); 
app.use(express.urlencoded({extended :true}))
app.use(express.json({extended :true}))

app.use("/",router);

app.listen(8000,()=>{
    console.log(`Server is running on port 8000`);
})