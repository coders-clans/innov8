const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    currStat:{
        type:Number,
        default:0
    }

})

const userModle = mongoose.model('user', schema);

module.exports = userModle;

