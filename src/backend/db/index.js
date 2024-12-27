import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import { date } from "zod";

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

const TodoSchema = new mongoose.Schema({
 date:{
  type:Date,
  require:true
 },
  title:{
    type: String,
    require: true
  },
  descripition:{
    type:String,
    require: true
  }
})
export const Todo = mongoose.model('Todo', TodoSchema);
export const User = mongoose.model("User", userSchems);
