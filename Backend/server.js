const express = require('express');
const connectDB = require('./config/connect');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
// const cookieparser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieparser());

app.use('/', userRoutes);

const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

