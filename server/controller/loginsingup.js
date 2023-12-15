import User from "../schema.js";
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()
const key= process.env.JWT_SECRET
 export const loginUsers= async(req,res)=>{

    try{
const {yourname,email,password}=req.body
const hassPassword= await bcrypt.hash(password, 10)
const user=new User ({name,email,password:hassPassword})
await user.save()
res.status(200).json({message:"user saved",data:user})

    }
    catch(error){
res.status(500).json({message:"user not saved error"})
    }
}



export const signIn=async(req,res)=>{
    try{
const {email,password}=req.body
const user =await findOne({email})
if(!user){
   return res.status(401).json({message:"email not found"})

}
const comparPass= await bcrypt.compare(password, User.password)
if(!comparPass){
   return res.status(401).json({message:"password not correct"})
}
const token = jwt.sign({_id:user._id},key,{expiresIn:'1h'})
user.token=token
await user.save()


res.status(200).json({message:"login successfully"})
    }
    catch(error){
res.status(500).json({message:"login error"})
    }
}
