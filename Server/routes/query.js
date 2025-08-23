const express = require('express');
const router = express.Router();
const queryController = require("../controller/query.js");

router.post("/", queryController.query);

module.exports = router;