const { createGoalPath } = require('../controllers/goalPathService');
const GoalPath = require('../models/goal');
const DayPlan = require('../models/dayTask');
const taskPlan = require('../models/task');

async function addNewGoal(req, res) {
    const userId = req.body.userId; // Retrieve from request
    const goal = req.body.goal;
    const totalDays = req.body.totalDays;
    const freeHoursPerDay = req.body.freeHoursPerDay;
    const dayPlansData = req.body.dayPlansData; // Should be an array of day plan data

    try {
        const savedGoalPath = await createGoalPath(userId, goal, totalDays, freeHoursPerDay, dayPlansData);
        res.status(201).json({
            success: true,
            message: "Goal Path created successfully",
            goalPath: savedGoalPath
        });
    } catch (error) {
        console.error("Failed to create Goal Path:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create Goal Path",
            error: error.message
        });
    }
}

const getTasksByDay = async (req, res) => {
    const { goalId, day } = req.params;

    try {
        const goalPath = await GoalPath.findById(goalId)
            .populate({
                path: 'dailyPlan',
                match: { day: Number(day) },
                populate: {
                    path: 'tasks',
                    model: 'Task'
                }
            });

        if (!goalPath) {
            return res.status(404).json({
                success: false,
                message: "Goal Path not found."
            });
        }

        const dayPlan = goalPath.dailyPlan.find(plan => plan.day === Number(day));

        if (!dayPlan) {
            return res.status(404).json({
                success: false,
                message: `No tasks found for Day ${day}.`
            });
        }
        res.status(200).json({
            success: true,
            message: `Tasks for Day ${day} retrieved successfully.`,
            tasks: dayPlan.tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve tasks.",
            error: error.message
        });
    }
};

const fetchGoal = async (req, res) => {
    const { userId } = req.params;

    if(!userId){
        return res.status(500).json("userId is note defined");
    }
    const response = await GoalPath.findOne({ userId });
    // console.log(response);
    return res.status(200).json(response);
}


async function updatetaskStatus(req, res) {
    const { goalPathId, taskId } = req.params;
    const { completed } = req.body; // Pass completed as true/false from frontend

    try {
        const task = await taskPlan.findByIdAndUpdate(taskId, { completed: !completed });

        if (!task) {
            return res.status(404).json({ success: false, message: 'Task not found.' });
        }
        res.status(200).json({ success: true, message: `Task marked as completed.`, task });
    } catch (error) {
        console.error("Error updating task status:", error);
        res.status(500).json({ success: false, message: 'Server error.', error: error.message });
    }
}




const getDayId = async (req, res) => {
    const { goalId, day } = req.body;
    console.log(goalId, day);
    return res.status(200).json({
        success: true,
        message: "testing"
    })
}


const deleteGoal = async (req, res) => {
    const { goalId } = req.params; // Retrieve goalId from request params

    try {
        // Step 1: Find the goal path
        const goalPath = await GoalPath.findById(goalId);
        if (!goalPath) {
            return res.status(404).json({
                success: false,
                message: "Goal Path not found."
            });
        }

        // Step 2: Delete associated DayPlans (if any)
        await DayPlan.deleteMany({ _id: { $in: goalPath.dailyPlan } });

        // Step 3: Optionally, delete associated tasks
        await taskPlan.deleteMany({ _id: { $in: goalPath.dailyPlan.flatMap(plan => plan.tasks) } });

        // Step 4: Delete the GoalPath
        await GoalPath.findByIdAndDelete(goalId);

        res.status(200).json({
            success: true,
            message: "Goal and associated data deleted successfully."
        });
    } catch (error) {
        console.error("Failed to delete goal:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete goal",
            error: error.message
        });
    }
};
module.exports = { addNewGoal, getTasksByDay, fetchGoal, updatetaskStatus, getDayId,deleteGoal };