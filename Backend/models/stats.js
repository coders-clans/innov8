const mongoose=require("mongoose");

const statsSchema=new mongoose.Schema({
    Rank:{type:Number},
    points:{type:Number},
    Streak:{type:Number},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const userStats=mongoose.model('userStats',statsSchema);

module.exports=userStats;