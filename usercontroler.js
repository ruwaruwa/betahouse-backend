const usermodel=require('../models/usermodel');
const joi=require('joi')

//get all users
const Getusers=async(req,res)=>{
    const userlis= await usermodel.find()
    res.json(userlis);
}
//get ome
const Getoneuser=async(req,res)=>{
    const {id}=req.params
    const userlis= await usermodel.findById(id)
    res.json(userlis);
}
//uservalidation
const uservalidation=(userval)=>{
    const uservalide=joi.object({
       name:joi.string().required(),
      email:joi.string().email().required(),
       role:joi.string(),
       status:joi.string()
    })
    return uservalide.validate(userval);
}
//post
const useradd=async(req,res)=>{
    const{error}=uservalidation(req.body)
    if(error){
        res.json(error.message)
    }
    try {
       const userad= new usermodel(req.body)
       await userad.save()
       res.json('successfuly posted')
    } catch (error) {
        res.json(error.message)
    }
}
const useredit= async(req,res)=>{
    const{id}=req.params
    const edit= await usermodel.findByIdAndUpdate(id,req.body,{new:true})
    res.json('succesfuly updated')
}
const userdelete= async(req,res)=>{
    const{id}=req.params
    const dele= await usermodel.findByIdAndDelete(id)
    res.json('succesfuly updated')
}
module.exports={Getusers,Getoneuser,useradd,useredit,userdelete}