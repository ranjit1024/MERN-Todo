import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:'../../../.env'});
const dbString = process.env.DBURL;

// console.log(dbString);
mongoose.connect(dbString)
const userSchems = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 12,
  },
  firstname: {
    type: String,
    require: true,
    minLength: 5,
    maxLength:12,
  },
  lastname: {
    type:String,
    require:true,
    minLength:5,
    maxLength:12,
  }
});

export const User = mongoose.model("User",userSchems);

