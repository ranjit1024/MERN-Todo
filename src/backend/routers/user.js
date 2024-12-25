import express from "express";
import zod from "zod";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const user =  import("../db/index.js");

// import dotenv from "dotenv"

export const userRouter = express.Router();
userRouter.use(express.json());

// dotenv.config('../../.env');

// console.log(process.env.JWT_SECRET);

const signupSchma = zod.object({
  username: zod.string().email(),
  password: zod.string().min(5),
  firstname: zod.string().min(3),
  lastname: zod.string().min(3),
});

