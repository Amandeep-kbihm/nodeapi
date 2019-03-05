var Register = require('../models').Register
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
        var token = req.headers.authorization.split(' ');
        jwt.verify(token[1], 'shhhhh', function(err, decoded) {
          if(err) {
             res.json({status: false, error: err.message});
          }
          Register.findOne({
            where: {
              email: decoded.foo
            }
          }).then(user => {
            if(user) {
              next()
            }
            else{
                res.status(401);
                res.json({status: false, error: "Unauthorized"});
            }
          })
        })
    }
