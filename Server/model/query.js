const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    country: {type: String, require: true},
    contact: {type: Number, require: true},
    message: {type: String, require: true}
}, {timestamps: true});

const Query = mongoose.model("Query", querySchema);
module.exports = Query;