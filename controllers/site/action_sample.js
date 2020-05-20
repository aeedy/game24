const Sequelize = require('sequelize');
const Op = Sequelize.Op;

var getSample = function(req, res, next) {

    res.json({
        'msg': 'OK'
    });
}


module.exports = {
    getSample
}