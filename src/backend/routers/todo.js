import express from "express";
import cors from "cors";
import { authMiddlware } from "../middleware.js";
import { Todo } from "../db/index.js";



export const todoRouter = express.Router();
todoRouter.use(cors());
todoRouter.use(express.json());



todoRouter.post("/createtodo", authMiddlware, async (req,res)=>{
   console.log(req.userId)
   Todo.create({
      userId: req.userId,
      date: req.body.date,
      title: req.body.title,
      descripition: req.body.descripition,
      iscompleted: false
   });
})
let count = 0;

todoRouter.get("/listtodo", authMiddlware, async (req,res)=>{
   count = count +  1;
   console.log(count)
   const allTodo = await Todo.find({
      userId:req.userId
   })
   try {
      res.status(200).json(allTodo)
   }catch(err){
      res.status(401).json({
         message:'sorry somthig went wrong'
      })
   }
});
