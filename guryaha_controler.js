const Housemodel=require('../models/housemodel')

    const joi=require('joi');
    //getby all
  
    const getHouse=async(req,res)=>{
        const houes= await Housemodel.find();
        res.json(houes)
       
    }

    //get ID
    const GETBY_id=async(req,res)=>{
        const{id}=req.params
        const getbyeid= await Housemodel.findById(id);
        res.json(getbyeid)
    }

    //validations
    const Validation=(housevalidation)=>{
        const HOUSE=joi.object({
            Housetype:joi.string().required(),
            area:joi.string().required(),
            adress:joi.string().required(),
            age:joi.string().required(),
            deposit:joi.number().required(),
            rent:joi.number().required(),
            parking:joi.string(),
            imagepreview:joi.string(),
            isAvailable:joi.string(),
            rooms:joi.string().required(),
            pathrooms:joi.string().required(),
            masterRooms:joi.string().required(),
            description:joi.string().required(),
            user:joi.string().required(),
        })
        return HOUSE.validate(housevalidation)
    }
   //post
    const Posthouse=async(req,res)=>{
        const{error}=Validation(req.body)
        if(error){
            res.json(error.message)
        }
        try {
           const Newhouse= new Housemodel(req.body) 
         await Newhouse.save()
     res.json({status:"succesfuuly added!!"})
        } catch (error) {
           res.json(error.message) 
        }
    }
//update
const Update=async(req,res)=>{
    const {id}=req.params
    const updates= await Housemodel.findByIdAndUpdate(id,req.body,{new:true})
    res.json({status:"successfully updated",house:updates})
}
//delete
const Delete= async(req,res)=>{
    const{id}=req.params
    const DELETES= await Housemodel.findByIdAndDelete(id)
    res.json({status:"successfully deleted",hOUS:DELETES})
}

    module.exports={getHouse,Posthouse,GETBY_id,Update,Delete}