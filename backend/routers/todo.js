import express from "express";
import cors from "cors";
import { authMiddlware } from "../middleware.js";
import { Complete, Todo, User } from "../db/index.js";
let count = 1;

export const todoRouter = express.Router();
todoRouter.use(cors());
todoRouter.use(express.json());



todoRouter.post("/createtodo", authMiddlware, async (req,res)=>{
   console.log(req.userId)
   const todo = await Todo.create({
      userId: req.userId,
      date: req.body.date,
      title: req.body.title,
      descripition: req.body.descripition,
      iscompleted: false
   });

})


todoRouter.get("/listtodo", authMiddlware, async (req,res)=>{
   
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

todoRouter.post("/completed", authMiddlware, async (req,res)=>{
   console.log(req.userId)
   const complet = await Complete.create({
      userId: req.userId,
      date: req.body.date,
      title: req.body.title,
      descripition: req.body.descripition,
      iscompleted: true
   });
   
})

todoRouter.post("/delete", async (req,res)=>{
   
   const deleteTodo = await Todo.deleteOne({
      title: req.body.title
   });
    console.log(deleteTodo)
    res.status(200).json({
      message:"delted"
    })
})

todoRouter.get("/completetodo", authMiddlware, async (req,res)=>{
   const allTodo = await Complete.find({
      userId:req.userId
   })
   try {
      res.status(200).json(allTodo)
   }catch(err){
      res.status(401).json({
         message:'sorry somthig went wrong'
      })
   }
})