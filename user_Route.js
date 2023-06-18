
const express=require('express');
const users=express.Router();
const {Getusers,Getoneuser,useradd,useredit,userdelete}=require('../controllars/usercontroler');
users.get('/',Getusers)
users.get('/:id',Getoneuser)

users.post('/',useradd)
users.put('/:id',useredit)
users.delete('/:id',userdelete)
module.exports=users