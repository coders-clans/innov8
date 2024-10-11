const mongoose = require('mongoose');
const mongoURL = "MONGO_URI=mongodb://localhost:27017/schedule-manager-users";
mongoose.connect(mongoURL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected to monogDB server");
});
db.on("Error", () => {
  console.log("Connection Error");
});

db.on("disconnected", () => {
  console.log("Server Disconnected");
});

module.exports = db;
