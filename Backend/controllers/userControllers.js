const User = require('../models/user');

async function signup(req, res) {
  try {
    const data = req.body;
    const newUser = new User(data);
    const response = await newUser.save();
    console.log("data saved");
    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }
    const userData = {
      user: {
        id: user.id,
        email: user.email,
      },
      message: "logged in successfully"
    };
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
}



module.exports = {
  signup, login
};