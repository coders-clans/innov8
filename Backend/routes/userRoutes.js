const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userControllers');
const User = require('../models/user')
const { transaction, payment, createOrder, verifyPayment } = require('../controllers/transaction');
const { donation } = require("../controllers/initiative");

//  documents
var path = require('path');


// Register new user
router.route('/signup').post(signup);
// Login user
router.post('/login', login);


module.exports = router;
