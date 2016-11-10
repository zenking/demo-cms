var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms');
mongoose.Promise = Promise;

exports.User = mongoose.model('User',new mongoose.Schema({
    email:String,
    username:String,
    password:String,
}));