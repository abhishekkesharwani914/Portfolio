const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URL;
const main = async () => {
    mongoose.connection.on("connected", () => console.log("Connected to DB")); // another way to show message in terminal
    await mongoose.connect(dbUrl);
}; 

module.exports = main;