const mongoose = require('mongoose');

//data schema for message
const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    anonymousName: { type: String, required: true},
    message: { type: String, required: true}
});


module.exports = mongoose.model('messages', messageSchema);
