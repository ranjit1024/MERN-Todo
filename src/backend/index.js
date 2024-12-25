import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routers/user.js";


const App = express();

//env configration 
dotenv.config({path:'../../.env'});
const port = process.env.PORT;
//


App.use("/user", userRouter);
App.use(cors())


App.listen(port, ()=>{
    console.log(`Listing On ${port}....`)
})
