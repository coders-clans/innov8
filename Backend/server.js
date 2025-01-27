const express = require("express");
require('dotenv').config();
const { connection } = require("./connect");
const { auth } = require("./middleware/userAuth");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const opRouter = require("./routes/opRoutes");
const aiRouter = require("./routes/aiRoutes");

const commentRouter = require('./routes/comment')
const userRouter = require("./routes/userRoutes");
const portNo = process.env.portNo;
const url = process.env.dbUrl;

const app = express();

const imageRouter = require('./controllers/image');

connection(url).then(() => {

    console.log("database connected successfully")
}).catch((error) => {
    console.log("there is some issue in connecting database")
})
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true, // Allow cookies to be sent
}));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/user/data", opRouter);
app.use("/user/goal", aiRouter);
app.use("/comment",commentRouter)
app.get("/", auth, (req, res) => {
    res.send("hello");
})
app.listen(portNo, () => {
    console.log("server started on port no ", portNo);
})