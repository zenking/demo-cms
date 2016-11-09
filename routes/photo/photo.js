var express = require('express');
var router = express.Router();

router.get('/show/:id',function (req,res) {
    console.log(req.params.id);
});

module.exports = router;
