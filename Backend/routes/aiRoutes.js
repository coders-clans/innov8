const express=require("express");
const {getGoalPath}=require("../controllers/aiController");
const {addNewGoal,getTasksByDay}=require("../controllers/goalController")

const aiRouter=express.Router();

aiRouter.post("/getPath",getGoalPath);
aiRouter.post("/createPath",addNewGoal);
aiRouter.get('/goal/:goalId/day/:day', getTasksByDay);

module.exports=aiRouter;