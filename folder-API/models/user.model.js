const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('Users', user);