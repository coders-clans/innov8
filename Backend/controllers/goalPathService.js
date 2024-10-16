const GoalPath = require('../models/goal');
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

module.exports = { createGoalPath };
