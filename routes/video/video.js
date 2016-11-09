var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('video/index', {title: '视频首页'})
});
/*router.get('/category',function (req,res) {

 });*/
module.exports = router;