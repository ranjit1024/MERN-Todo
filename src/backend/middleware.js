import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config({path:".env"});
const JWT_TOKEN = process.env.JWT_TOKEN;

export function authMiddlware(req,res,next) {
    const authHeader = req.headers.authorization;
    console.log(req.headers)
    console.log(authHeader);
    next()

}