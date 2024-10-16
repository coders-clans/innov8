const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    time: { type: Number, required: true }, // Estimated time in hours
    completed: { type: Boolean, default: false }, // Indicates if the task is completed
    completedAt: { type: Date } // Timestamp when the task was marked as completed
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
