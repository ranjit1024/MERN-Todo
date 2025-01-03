const express =  require("express");
const  bodyParser =  require( "body-parser");
const  cors =  require("cors");
const  mongoose =  require("mongoose");
const  dotenv =  require("dotenv");

const  { userRouter }  = require ("./routers/user.js");
const  { todoRouter } = require("./routers/todo.js");


const App = express();

//env configration 
dotenv.config({path:'../../.env'});
const port = process.env.PORT;
//


App.use("/user", userRouter);
App.use("/todo", todoRouter)
App.use(cors(
    {
        origin: "https://mern-todo-backend-iqs6.onrender.com",
     
     }
))

App.get('/', (req,res)=>{
    res.send('this is good')
})

App.listen(port, ()=>{
    console.log(`Listing On ${port}....`)
})
