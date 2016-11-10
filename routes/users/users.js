var express = require('express');
var router = express.Router();
var models = require('../../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/reg', function (req, res, next) {
    res.render('user/reg', {title: '用户注册'})
});
router.post('/reg', function (req, res, next) {
    var user = req.body;
    console.log(user);
    if(user.repassword != user.password){
        res.redirect('back')
    }else{
        models.User.create(user).then(function (doc) {
            req.session.user = doc;
            res.redirect('/')
        },function (err) {
            console.error(err);
            res.redirect('back');
        })
    }
});
router.get('/login', function (req, res, next) {
    res.render('user/login', {title: '用户登录'})
});
router.post('/login',function (req,res,next) {
    models.User.findOne(req.body).then(function (doc) {
        if(doc){
            req.session.user = doc;
            res.redirect('/')
        }else {
            res.redirect('back')
        }
    },function (err) {
        console.error(err);
        res.redirect('back');
    })
});
router.get('/share/:id',function (req,res) {

});

module.exports = router;
