const express=require("express");
const router=express.Router();
const Comment = require('../models/comment')
router.post('/add', async (req, res) => {
    try {
      const { name, comment, rating } = req.body;
  
      // Input validation
      if (!name || !comment || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'Invalid input data' });
      }
  
      // Check for duplicate reviews
      const exists = await Comment.findOne({ name: name });
      if (exists) {
        return res.status(400).json({ message: "You can add only one review" });
      }
  
      // Create and save the new comment
      const newComment = new Comment({
        name,
        comment,
        rating,
        createdAt: new Date() // explicitly setting createdAt
      });
  
      await newComment.save();
      res.status(201).json({ message: 'Comment uploaded successfully', comment: newComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding comment', error: error.message });
    }
  });

  router.get('/show', async (req, res) => {
    try {
      const comments = await Comment.find();
  
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching comments', error: error.message });
    }
  }); 


  module.exports = router;