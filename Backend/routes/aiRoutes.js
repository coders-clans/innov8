const express=require("express");
const {getGoalPath}=require("../controllers/aiController");
const {addNewGoal}=require("../controllers/goalController")

const aiRouter=express.Router();

aiRouter.post("/getPath",getGoalPath);
aiRouter.post("/createPath",addNewGoal);

module.exports=aiRouter;