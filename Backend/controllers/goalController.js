const { createGoalPath } = require('../controllers/goalPathService');

const GoalPath = require('../models/goal');
const DayPlan = require('../models/dayTask');




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
        // Find the GoalPath by ID and populate the dailyPlan and tasks
        const goalPath = await GoalPath.findById(goalId)
            .populate({
                path: 'dailyPlan',
                match: { day: Number(day) }, // Match the day in the dailyPlan array
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

        // Extract the day plan for the specific day
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




module.exports = { addNewGoal ,getTasksByDay};

