if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const main = require("./Config/mongodb.js");
const compression = require('compression');
const port = process.env.PORT || 3000;

const queryRoute = require("./routes/query.js");

main(); // connect to database

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL, // production
  "http://localhost:5173",  // local dev
  "http://127.0.0.1:5173",  // local dev
  "http://10.30.107.164:5173" // your LAN IP
];
const corsOption = {
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression())

app.use("/query", queryRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});