const GoalPath = require('../models/goal');
const DayPlan = require('../models/dayTask');
const { createDayPlan } = require('./DayService');

async function createGoalPath(userId, goal, totalDays, freeHoursPerDay, dayPlansData) {
    const dayPlanPromises = dayPlansData.map(dayPlanData => {
        return createDayPlan(
            dayPlanData.day,
            dayPlanData.title,
            dayPlanData.description,
            dayPlanData.tasks
        );
    });

    const dayPlanIds = await Promise.all(dayPlanPromises);

    const goalPath = new GoalPath({
        userId: userId,
        goal: goal,
        totalDays: totalDays,
        freeHoursPerDay: freeHoursPerDay,
        dailyPlan: dayPlanIds
    });

    const savedGoalPath = await goalPath.save();
    return savedGoalPath;
}

// async function getDayPlanIdByDayNumber(req, res) {
//     const { goalId, dayNo } = req.body; // Expecting from req.body in POST
//     console.log("Goal ID:", goalId, ", Day No:", dayNo);
//     try {
//         // Ensure goalId is a valid ObjectId
//         // if (!mongoose.Types.ObjectId.isValid(goalId)) {
//         //     return res.status(400).json({ success: false, message: 'Invalid Goal ID' });
//         // }

//         // // Find the GoalPath and fully populate the dailyPlan with DayPlan documents
//         // const goalPath = await GoalPath.findById(goalId).populate({
//         //     path: 'dailyPlan', // Populate dailyPlan
//         //     model: 'DayPlan', // Referencing DayPlan model
//         // });

//         // if (!goalPath) {
//         //     return res.status(404).json({ success: false, message: 'Goal Path not found.' });
//         // }

//         // // Find the DayPlan matching the given dayNo
//         // const dayPlan = goalPath.dailyPlan.find(plan => plan.day === dayNo);

//         // if (!dayPlan) {
//         //     return res.status(404).json({ success: false, message: 'Day Plan not found.' });
//         // }

//         // Return the ID of the DayPlan
//         return res.status(200).json({ success: true });
//     } catch (error) {
//         console.error("Failed to retrieve DayPlan ID:", error);
//         return res.status(400).json({ success: false, message: "Error retrieving DayPlan ID" });
//     }
// }



module.exports = { createGoalPath };
