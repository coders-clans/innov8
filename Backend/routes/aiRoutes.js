const express = require("express");
const { getGoalPath } = require("../controllers/aiController");
const { addNewGoal, getTasksByDay, fetchGoal, updatetaskStatus } = require("../controllers/goalController")

const aiRouter = express.Router();

aiRouter.post("/getPath", getGoalPath);
aiRouter.post("/createPath", addNewGoal);
aiRouter.get('/:goalId/day/:day', getTasksByDay);
aiRouter.get('/:userId', fetchGoal);
aiRouter.patch('/goal-path/:goalPathId/day-plan/:dayPlanId/task/:taskId', updatetaskStatus);
module.exports = aiRouter;
