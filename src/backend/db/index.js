import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const connectDb = async () =>{
  try{
    await mongoose.connect(process.env.DBURL);
    console.log('DB contected...')
  }catch(err){
    console.log(err.message);
    process.exit(1);
  }
}
connectDb()

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
  
  },
  firstname: {
    type: String,
    require: true,
    
    maxLength: 12,
  },
  lastname: {
    type: String,
    require: true,
  
    maxLength: 12,
  },
});

export const User = mongoose.model("User", userSchems);
