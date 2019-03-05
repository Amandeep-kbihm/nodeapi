var express = require('express');
var router = express.Router();
var Register = require('../models').Register
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');



router.get('/',function(req,res,next){
    // res.json("test");
    // console.log("req");
})
router.post('/',function(req,res,next){
   // console.log(req.body);
    username = req.body.username;
    email = req.body.email;
    password = bcrypt.hashSync(req.body.password, 8);   
    status = 1;
    Register.create({
        username: username,
        email: email,
        password: password,
        status: status
    })
    .then(result => {
        res.send({
            status: true,
            data: result
        })
    })
    .catch(err => {
        let error= err.errors ? err.errors[0].message : err
        res.send({
            status: false,
            data: [],
            error
        })
    })
})
router.post('/login',function(req,res,next){
    email = req.body.email;
    password = req.body.password;
    Register.findOne({
        where:{
            email: email,
            status: 1
        }
    })
    .then(result => {
        if(bcrypt.compareSync(password,result.password)){
            var token = jwt.sign({ foo: email }, 'shhhhh');
            res.send({
                status: true,
                data: {user: result,  token: token}
            })
        }
    })
    .catch(err => {
        let  error = err.errors ? err.errors[0].message : err;
        res.send({
            status: false,
            data: error
        })
    })
})
module.exports = router;
