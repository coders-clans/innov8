const userModle = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const skey = process.env.secretKey;
const nodemailer = require("nodemailer");

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "pls fill all information"
        })
    }
    const isUser = await userModle.findOne({ email });
    if (isUser) {
        console.log(isUser);
        return res.status(400).json({
            success: false,
            message: "email already exist"
        })

    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newData = await userModle.create({ name: name, email: email, password: hashedPassword });
        return res.status(200).json({
            success: true,
            message: "user Siggned In successfully"
        })

    } catch (error) {
        return res.json({
            success: false,
            message: "there is some error in SignUp"
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please fill all information"
        });
    }
    try {
        const isUser = await userModle.findOne({ email });
        if (!isUser) {
            return res.status(401).json({
                success: false,
                message: "Please sign up first"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, isUser.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Wrong password"
            });
        }

        const payload = {
            name: isUser.name,
            email: isUser.email,
            id: isUser._id
        };

        const token = jwt.sign(payload, skey, {
            expiresIn: '10h'
        });

        isUser.token = token;
        isUser.password = undefined;

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true, // Prevents JavaScript from accessing cookies
            sameSite: 'Lax' // Adjust based on your needs
        };
        console.log(token)
        res.setHeader('Authorization', `Bearer ${token}`);

        res.cookie('cookies', token, options).status(200).json({
            success: true,
            token,
            isUser,
            message: "User logged in successfully"
        });



    } catch (error) {
        return res.json({
            success: false,
            message: "There is some error in login"
        });
    }
    // res.json({ success: true, token: isUser.token });
};
const signOut = async (req, res) => {
    res.clearCookie('cookies');

    return res.json({
        success: true,
        message: 'loggedOut Successfully'
    })

}


const editName = async (req, res) => {
    try {
        const { email } = req.params;
        console.log(email);
        const response = await User.findOne({ email });
        console.log(response);
        return res.json({
            success: true,
            message: "success",
            response: response
        })
    }
    catch (error) {
        return res.json({
            message: "error occured"
        })
    }
}
const editEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const updatedData = req.body;
        const user = await userModle.findOneAndUpdate({ email: email }, updatedData, { new: true });
        if (user) {
            res.json({ message: 'User updated successfully', response: user });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }

}

const getUser = async (req, res) => {
    try {
        const { email } = req.params;
        console.log(email);
        const response = await userModle.findOne({ email });
        console.log(response);

        return res.json({
            success: true,
            message: "Successful",
            response: response
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "There is some problem in getting the user"
        });
    }

}

const emailVerifiction = (req, res) => {
    const { email, otp } = req.params;


    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        host: process.env.STMP_HOST,
        port: process.env.STMP_PORT,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: process.env.STMP_USER,
            pass: process.env.UserPassword,
        },
    });

    // Compose the email message
    const mailOptions = {
        from: process.env.STMP_USER,
        to: email,
        subject: 'Confirmation Email',
        text: 'Testing mail',
        html: `<p>Thank you for registering! Please click the following link to confirm your email address here is your otp:<br/> <b>${otp}</b></p>`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({
                success: true,
                message: "error is there"
            });
        } else {
            console.log('Email sent:', info.response);
            return res.json({
                success: true,
                message: "confirmation mail sent successfully"
            })
        }
    });
};




















module.exports = { signUp, login, signOut, editName, getUser, emailVerifiction, editEmail }