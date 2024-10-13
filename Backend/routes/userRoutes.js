<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userControllers');
const User = require('../models/user')

//  documents
var path = require('path');
=======
const express=require("express");
const userRouter=express.Router();
const {signUp,login,signOut, editName, getUser, emailVerifiction, editEmail}=require("../controllers/userControllers");


userRouter.post('/signUp',signUp);

userRouter.post('/login',login);
userRouter.post('/signout',signOut)
userRouter.patch('/UpdateName/:email',editName);
userRouter.get('/getUser/:email',getUser);
userRouter.patch('/EmailVerify/:email/:otp',emailVerifiction);
userRouter.patch('/editEmail/:email',editEmail);

module.exports=userRouter;

>>>>>>> 440e1138b2cb433ec9ed12f0780e4fc59f596c61




