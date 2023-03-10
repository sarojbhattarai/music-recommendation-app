import User from "../models/user.js"
import {StatusCodes} from 'http-status-codes';

const register=async (req,res,next)=>{
    const {name,password}=req.body
    console.log({name,password})
    if (!name || !password){
        //throw new Error('please provide all values')
        console.log('error')
    }
    try{
        const user= await User.create({name,password})
        res.status(StatusCodes.OK).json({user})
    }
    catch(err){
        console.log('error',err)
    }
        
}
const login= async (req,res)=>{
    const {name,password}=req.body
    try{
        const user=await User.findOne({name,password})
        res.status(StatusCodes.OK).json({user})
    }
    catch(err){
        console.log('Error login',err)
    }
   
}
const updateUser=(req,res)=>{
    res.send('update')
}
export {register,login,updateUser}
