const mongoose = require('mongoose');


const GoalPathSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    goal: { type: String, required: true },
    totalDays: { type: Number, required: true },
    freeHoursPerDay: { type: Number, required: true },
    dailyPlan: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DayPlan' }] ,// Array of DayPlan IDs
    completed: { type: Boolean, default: false }, // Indicates if the task is completed
    completedAt: { type: Date }
});

const GoalPath = mongoose.model('GoalPath', GoalPathSchema);
module.exports = GoalPath;
