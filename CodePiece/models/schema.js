const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    image: String,
    name: String,
    memberno: Number,
    position: String,
})

const Member = mongoose.model("Member", Schema);
module.exports = Member;