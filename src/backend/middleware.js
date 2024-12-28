import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { User } from "./db/index.js";
dotenv.config({path:".env"});
const JWT_SECRET = process.env.JWT_SECRET;



export const authMiddlware  = async(req,res,next) => {
    
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        console.log("Enter")
        return res.status(403).json({});
    }
    
    const token = authHeader.split(" ")[1];
    
    
    
    
    try{
        const decode = jwt.verify(token, JWT_SECRET);
        req.userId = decode.userId;
        
        next()
    }

    catch(err){
        return res.status(401).json({})
    }
   

}