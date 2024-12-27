import express from "express";
import cors from "cors";
import { authMiddlware } from "../middleware.js";


export const todoRouter = express.Router();
todoRouter.use(cors());
todoRouter.use(express.json());



todoRouter.post("/", authMiddlware, (req,res)=>{
    res.json({
        message:'this is data'
    })
})