const userStats= require("../models/stats");
const { findByIdAndUpdate, findOneAndUpdate } = require("../models/user");


const getData=async(req,res)=>{
    try{
        const response= await userStats.find({});
    res.status(200).json({
        success:true,
        message:"data Fetched successfully",
        response:response
    })

    }catch{
        res.status(404).json({
        success:false,
        message:"server error",
        })
    }
    
}

const getDataById=async(req,res)=>{
    try{
        const {id}=req.params;
        const response= await userStats.find({user:id});
    res.status(200).json({
        success:true,
        message:"data Fetched successfully",
        response:response
    })

    }catch{
        res.status(404).json({
        success:false,
        message:"server error",
        })
    }
    
}

const postData=async(req,res)=>{
    try{
        const {id}=req.params;
        const {Rank,points,Streak}=req.body;
        const response= await userStats.create({
            Rank,
            points,
            Streak,
            user:id
        })
    res.status(200).json({
        success:true,
        message:"data posted successfully",
        response:response
    })


    }catch{
        res.status(404).json({
            success:false,
            message:"server error",
            })
    }
}

const updateData=async(req,res)=>{
    try{
        const {id}=req.params;
        const {Rank,points,Streak}=req.body;
        const response=await userStats.findOneAndUpdate({user:id},{Rank,points,Streak});
        res.status(200).json({
            success:true,
            message:"data updated successfully",
            response:response
        })

    }catch{
        res.status(404).json({
            success:false,
            message:"server error",
            })

    }
}
module.exports={getData,getDataById,updateData,postData}