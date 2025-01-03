const express =  require("express");
const  zod =  require("zod");
const  bcrypt = require("bcryptjs");
const  { User } =  require("../db/index.js");
const  jwt  = require("jsonwebtoken");
const  cors  = require("cors");

const  dotenv =  require("dotenv");

const userRouter = express.Router();
userRouter.use(express.json());
userRouter.use(cors(
  
));

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

  const user = await User.create({
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

  if(!isMathch){
    return res.status(401).json({
      message:'password is incorrect'
    })
  }

 

  const token = jwt.sign(
    {
      userId: findUser._id,
    },
    JWT_SECRET
  );



  res.status(200).json({
    message: "Your are an user",
    token,
  });
});

module.exports = {
  userRouter
}