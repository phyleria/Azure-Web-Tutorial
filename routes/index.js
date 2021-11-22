var express = require('express');
var router = express.Router();
let LaunchTime = new Date ("11/22/2021 5:57").getTime();


/* GET home page. */
router.get('/', function(req, res, next) {
 let currentTime = new Date().getTime()
 let numberOfMilliseconds= parseInt(LaunchTime, currentTime);
 res.render('index', {title:'countdown to launch', countDown: numberOfMilliseconds});

});

module.exports = router;
