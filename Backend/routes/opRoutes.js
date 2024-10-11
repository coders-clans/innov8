const express=require("express");
const {getData,postData,updateData,getDataById}=require("../controllers/leaderBoardController");
const opRouter=express.Router();

opRouter.get("/getStats",getData);
opRouter.post("/postStats/:id",postData);
opRouter.patch("/updateStats/:id",updateData);
opRouter.get("/getStats/:id",getDataById);



module.exports=opRouter;