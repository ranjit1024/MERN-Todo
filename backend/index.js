const express =  require("express");
const  bodyParser =  require( "body-parser");
const  cors =  require("cors");
const  mongoose =  require("mongoose");
const  dotenv =  require("dotenv");
const path = require('path');

const  { userRouter }  = require ("./routers/user.js");
const  { todoRouter } = require("./routers/todo.js");


const App = express();


//for production
const _dirname = path.resolve();

//env configration 
dotenv.config({path:'../../.env'});
const port = process.env.PORT;
//


App.use("/user", userRouter);
App.use("/todo", todoRouter);

App.use(express.static(path.join(_dirname,"/FrontEnd/dist")));

App.use('/images', express.static( path.join(_dirname, '/FrontEnd/src/images')));

App.get("*", (req,res)=>{
    res.sendFile(path.resolve(_dirname, "FrontEnd" , "dist" , "index.html"))
})

App.use(cors({
    origin:"https://mern-todo-59u7.onrender.com",
    credentials:true,
}))



App.listen(port, ()=>{
    console.log(`Listing On ${port}....`)
})
