const express = require("express");
const userRouter = express.Router();
const { signUp, login, signOut, editName, getUser, emailVerifiction, editEmail } = require("../controllers/userControllers");

// const router = express.Router();


// const multer = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
//   }
// });
// const upload = multer({ storage: storage });

// // Fetch user profile
// router.get('/profile', async (req, res) => {
//   try {
//     const user = await User.findOne(); // Assuming single user for simplicity
//     res.json(user);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Update profile photo
// router.put('/profile-photo', upload.single('profilePhoto'), async (req, res) => {
//   try {
//     const user = await User.findOne(); // Assuming single user for simplicity
//     user.profilePhoto = `http://localhost:7001/uploads/${req.file.filename}`;
//     await user.save();
//     res.json({ profilePhoto: user.profilePhoto });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });



userRouter.post('/signUp', signUp);
userRouter.post('/login', login);
userRouter.post('/signout', signOut)
userRouter.patch('/UpdateName/:email', editName);
userRouter.get('/getUser/:email', getUser);
userRouter.patch('/EmailVerify/:email/:otp', emailVerifiction);
userRouter.patch('/editEmail/:email', editEmail);
module.exports = userRouter;