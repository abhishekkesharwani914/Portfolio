if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const main = require("./Config/mongodb.js");
const port = process.env.PORT || 3000;

const queryRoute = require("./routes/query.js");

main();

const corsOption = {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/query", queryRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});