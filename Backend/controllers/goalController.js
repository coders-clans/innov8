const { createGoalPath } = require('../controllers/goalPathService');

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

module.exports = { addNewGoal };
