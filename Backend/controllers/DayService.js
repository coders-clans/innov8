const DayPlan = require('../models/dayTask');
const { createTasksForDay } = require('./tasksService');

async function createDayPlan(dayNumber, title, description, tasksData) {
    const taskIds = await createTasksForDay(tasksData);

    const dayPlan = new DayPlan({
        day: dayNumber,
        title: title,
        description: description,
        tasks: taskIds
    });

    const savedDayPlan = await dayPlan.save();
    return savedDayPlan._id; // Return the ID of the saved day plan
}

module.exports = { createDayPlan };
