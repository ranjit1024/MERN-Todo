import express from "express";
import zod from "zod";
import bcrypt from "bcryptjs";
import { User } from "../db/index.js";
import jwt from "jsonwebtoken";
import cors from "cors";

import dotenv from "dotenv";

export const userRouter = express.Router();
userRouter.use(express.json());
userRouter.use(cors());

//getting jwt secret
dotenv.config({ path: ".env" });
const JWT_SECRET = process.env.JWT_SECRET;
//

const signupSchma = zod.object({
  username: zod.string().email(),
  password: zod.string().min(5),
  firstname: zod.string().max(12),
  lastname: zod.string().max(12),
});

userRouter.post("/signup", async (req, res) => {
  console.log("Listing..");
  const { success } = signupSchma.safeParse(req.body);
  // console.log(req.body)
  // console.log(success)

  if (!success) {
    return res.status(411).json({
      message: "Username is invalid",
    });
  }

  // creating hash and
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  // done

  req.body.password = hash;

  const findUser = await User.findOne({
    username: req.body.username,
  });

  if (findUser) {
    return res.status(401).json({
      message: "email Already taken",
    });
  }

  const user = User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  res.json({
    message: "You have Been Successfully Created Account",
    token,
  });
});

const signInSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(4),
});

userRouter.post("/signin", async (req, res) => {
  const { success } = signInSchema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "UserName is ivalid",
    });
  }

  const findUser = await User.findOne({
    username: req.body.username,
  });

  if (!findUser) {
    return res.status(401).json({
      message: "username Not found",
    });
  }

  //getting password 
  const passwordFinder = await User.findOne({
    username:req.body.username
  });
  const userPassword = passwordFinder.password;
  //done
  const isMathch = await bcrypt.compare(req.body.password,userPassword);
  console.log(isMathch);
  if(!isMathch){
    return res.status(401).json({
      message:'password is incorrect'
    })
  }

  const token = jwt.sign(
    {
      userId: User._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    message: "Your are an user",
    token,
  });
});
