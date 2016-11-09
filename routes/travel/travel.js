var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('travel/index',{title:'旅游专题'})
});

module.exports = router;
