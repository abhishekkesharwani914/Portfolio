const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URL || "mongodb+srv://abhishekkesharwani914:AbHi6264637966@cluster0.0fe64rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const main = async () => {
    mongoose.connection.on("connected", () => console.log("Connected to DB")); // another way to show message in terminal
    await mongoose.connect(dbUrl);
}; 

module.exports = main;