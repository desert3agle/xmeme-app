const mongoose = require('mongoose');
const normalizeMongoose = require("normalize-mongoose")

// scheme for memes stored in database {name: "" , caption: "", url: ""}
const MemeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// to normalize json response to client ( _id -> id)
MemeSchema.plugin(normalizeMongoose);


module.exports = mongoose.model('Memes', MemeSchema);
