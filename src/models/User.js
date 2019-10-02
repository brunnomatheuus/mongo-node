const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
});

module.exports = mongoose.model('User', UserSchema);