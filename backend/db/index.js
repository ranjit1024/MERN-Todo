const mongoose =  require("mongoose");
const dotenv  = require("dotenv");
const { date } =  require("zod");

dotenv.config({ path: ".env" });

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("DB contected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
connectDb();

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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
    
  },
  date: {
    type: String,
    require: true,
  
  },
  title: {
    type: String,
    require: true,
    trim:true,
  },
  descripition: {
    type: String,
    require: true,
  },
  iscompleted: {
    type: Boolean,
    require: true,
  }
});

const completedTodo = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
    
  },
  date: {
    type: String,
    require: true,
  
  },
  title: {
    type: String,
    require: true,
    trim:true,
  },
  descripition: {
    type: String,
    require: true,
  },
  iscompleted: {
    type: Boolean,
    require: true,
  }
})
 const Todo = mongoose.model("Todo", TodoSchema);
 const User = mongoose.model("User", userSchems);
 const Complete = mongoose.model("completed", completedTodo);

module.exports  = {
  Todo,User,Complete
}