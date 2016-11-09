var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms');

exports.User = mongoose.model('User',new mongoose.Schema({
    email:String,
    username:String,
    password:String,
}));