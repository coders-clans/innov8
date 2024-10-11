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





