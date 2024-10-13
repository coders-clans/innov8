<<<<<<< HEAD
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImg: { type: String }
});
=======
const mongoose=require("mongoose");

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImg: { type: String }
   
})
>>>>>>> 440e1138b2cb433ec9ed12f0780e4fc59f596c61

const userModle = mongoose.model('user',schema);

module.exports=userModle;

