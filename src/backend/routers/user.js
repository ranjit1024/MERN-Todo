import express from "express";
import zod from "zod";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const user =  import("../db/index.js");
import bscypt from "bcryptjs"

import dotenv from "dotenv"

export const userRouter = express.Router();
userRouter.use(express.json());

//getting jwt secret
dotenv.config({path:'../../.env'});
console.log(process.env.JWT_SECRET);
//

const signupSchma = zod.object({
  username: zod.string().email(),
  password: zod.string().min(5),
  firstname: zod.string().min(3),
  lastname: zod.string().min(3),
});

userRouter.post('/signup', async (req, res)=>{
    const {success} = signupSchma.safeParse(req.body);

    if(!success){
      return res.status(411).json({
        message:'Username is invalid'
      })
    }
   
    // creating hash and 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    // done

    req.body.password = hash;

    const findUser = await user.findOne({
      username:req.body.username
    })

    if(findUser){
      return res.status(411).json({
        message:'Email is already taken'
      })
    }

    // const user1 = await user.create()

    res.send("Listing...")
})

