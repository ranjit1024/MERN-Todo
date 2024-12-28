import express from "express";
import cors from "cors";
import { authMiddlware } from "../middleware.js";
import { Todo } from "../db/index.js";


export const todoRouter = express.Router();
todoRouter.use(cors());
todoRouter.use(express.json());



todoRouter.post("/createtodo", authMiddlware, (req,res)=>{
   const date = new Date;
   
   res.send("fsd")
})