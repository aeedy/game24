var express = require('express');
var site_route = express.Router();
var cors = require('cors');


/* GET home page. */
site_route.get('/', function(req, res, next) {
    res.render('index', { title: 'Web Service REST API' });
});

site_route.post('/game24', function(req, res, next) {
    let v1 = req.body.input1;
    let v2 = req.body.input2;
    let v3 = req.body.input3;
    let v4 = req.body.input4;
    let arrVal = [v1,v2,v3,v4];
    let answer = false;

    arrVal.forEach(v => {
        console.log(v)
    });
    
    let results = "เดาไม่ถูก";
    if(answer) results = "ถูกต้องนะครับ";
    res.render('result', { result: results });
});


module.exports = site_route;