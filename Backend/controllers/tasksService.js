const Task = require('../models/task');

async function createTasksForDay(tasksData) {
    const taskPromises = tasksData.map(taskData => {
        const task = new Task(taskData);
        return task.save();
    });

    // Save all tasks and return their IDs
    const savedTasks = await Promise.all(taskPromises);
    return savedTasks.map(task => task._id);
}


module.exports = { createTasksForDay };
