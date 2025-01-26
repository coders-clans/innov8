
const express = require("express");
const { getGoalPath } = require("../controllers/aiController");
const { addNewGoal, getTasksByDay, fetchGoal, updatetaskStatus, getDayId ,deleteGoal} = require("../controllers/goalController");
const { getDayPlanIdByDayNumber } = require("../controllers/goalPathService");

const aiRouter = express.Router();

aiRouter.post("/getPath", getGoalPath);
aiRouter.post("/createPath", addNewGoal);
aiRouter.get('/:goalId/day/:day', getTasksByDay);
aiRouter.get('/:userId', fetchGoal);
aiRouter.patch('/updateTaskStatus/:goalPathId/:taskId', updatetaskStatus);
aiRouter.delete("/delete/:goalId",deleteGoal);
// aiRouter.get('/getdayId', getDayId); // Ensure the request uses query parameters correctly


module.exports = aiRouter;
