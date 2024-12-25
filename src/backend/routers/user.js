import express from "express";
import zod from "zod";
import bcrypt from "bcryptjs";
import {User} from "../db/index.js";
import jwt from "jsonwebtoken"


import dotenv from "dotenv"

export const userRouter = express.Router();
userRouter.use(express.json());

//getting jwt secret
dotenv.config({path:'.env'});
const JWT_SECRET = (process.env.JWT_SECRET);
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

    const findUser = await User.findOne({
      username:req.body.username
    })

    if(findUser){
      return res.status(401).json({
        message:'email Already taken'
      })
    }

    const user = User.create({
      username:req.body.username,
      password:req.body.password,
      firstname:req.body.firstname,
      lastname:req.body.lastname
    })

    jwt.sign({
      userId:user._id
    },JWT_SECRET)

    res.json("Listing...")
})

