const mongoose = require("mongoose")
const { Schema } = mongoose

//  Bounty Blueprint

const bountySchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["Sith", "sith", "Jedi", "jedi", "Humanoid", "humanoid"]
    } 
})

module.exports = mongoose.model("Bounty", bountySchema)