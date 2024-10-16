const mongoose = require('mongoose');


const DayPlanSchema = new mongoose.Schema({
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }], // Array of Task IDs
    completed: { type: Boolean, default: false }, // Indicates if the task is completed
    completedAt: { type: Date }
});

const DayPlan = mongoose.model('DayPlan', DayPlanSchema);
module.exports = DayPlan;
