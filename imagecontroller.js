//const express=require('express');
const imagemodel=require('../models/imaggemdel');
const joi=require('joi');

//getby all
const getimages=async(req,res)=>{
    const imageslis= await imagemodel.find().populate({
        path:"guryaha_ID",
        model:"Betahouse",
        select:"imagepreview parking deposit rent"
    })
    res.json(imageslis);
 }

//get bye id
const getbyid=async(req,res)=>{
  const {id}=req.params
    const getbyone= await imagemodel.findById(id);
    res.json(getbyone);
 }
 //validation
 const imgvalidation=(imgvalide)=>{
    const imgval=joi.object({
        guryaha_ID:joi.string(),
        images_URL:joi.string().required()
    })
    return imgval.validate(imgvalide)
 }
 //post images
 const postimages=async(req,res)=>{
    const{err}=imgvalidation(req.body)
       if(err){
        res.json(err.message)
       }
    try {
       const posimg= new imagemodel(req.body) 
       await posimg.save();
       res.json('successfully aded !!')
    } catch (error) {
       res.json(error.message) 
    }
 }
 //update
 const imgupde=async(req,res)=>{
    const{id}=req.params
const imgupd= await imagemodel.findByIdAndUpdate(id,req.body,{new:true})
res.json({status:'successfully updated !!',imges:imgupd})
 }
 const Deletimg=async(req,res)=>{
    const{id}=req.params
const deletig= await imagemodel.findByIdAndDelete(id)
res.json({status:'successfully deleted !!',imges:deletig})
 }

 module.exports={getimages,getbyid,postimages,imgupde,Deletimg}