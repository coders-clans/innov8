const Users = require("../models/user");

const bcrypt = require("bcrypt");
const comments = async(req,res) =>{
    try {
        const user = await Users.findById(req.params.id);
        if(!user) {
            return res.status(404).json({msg: "User not found"});
        }   
        const newComment = {
            name: req.body.name,
            email: req.body.name,            
        }   
        user.comments.unshift(newComment);
        await user.save();
        res.json(user.comments);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
 }
 
module.exports = comments;
