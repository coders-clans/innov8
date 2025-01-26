const express = require("express");
const userRouter = express.Router();
const { signUp, login, signOut, editName, getUser, emailVerifiction, editEmail,updateCurrStat ,getCurrStat} = require("../controllers/userControllers");



userRouter.post('/signUp', signUp);
userRouter.post('/login', login);
userRouter.post('/signout', signOut)
userRouter.put('/UpdateName/:user_id', editName);
userRouter.get('/getUser/:email', getUser);
userRouter.patch('/EmailVerify/:email/:otp', emailVerifiction);
userRouter.patch('/editEmail/:email', editEmail);
userRouter.patch('/updateDay/:user_id', updateCurrStat);
userRouter.get('/getDay/:user_id', getCurrStat);

module.exports = userRouter;