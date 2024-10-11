const mongoose=require("mongoose");




const schema = new mongoose.Schema({
    name:{
         type: Schema.Types.ObjectId, 
         ref:"user",  
         required: true 
    },
    
    email: {
        type: Schema.Types.ObjectId,
        ref:"user", 
        required: true, 
        unique: true 
    },

    profileImg: { type: String }
  });

const commentModel = mongoose.model("userProfile", schema);

module.exports = commentModel;