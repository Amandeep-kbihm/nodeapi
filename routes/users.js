var express = require('express');
var router = express.Router();
var apiAuth = require('../middlewares/apiAuth')
var User = require('../models').User


router.use(apiAuth);
 

/* GET users listing. */
router.get('/', function(req, res, next) { 
  User.findAll().then(users => {
    console.log(users)
    res.json(users);
  })
});
router.post('/',function(req,res,next){
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  email = req.body.email;
  //status = 1;
  User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
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
          error: error
      })
  })
});
router.get('/:id',function(req,res,next){
  User.findAll({
    where: {
      id:req.params.id
    }
  })
  .then(users => {
    res.json(users)
  })
  // User.findById(req.params.id)
  //   .then(result=>{
  //     console.log(result)
  //     res.send({
  //       status: true,
  //       data: result
  //     })
  //   })
  //   .catch(err => {
  //     let erros = err.errors ? err.errors[0].message : err
  //     res.send({
  //       status: false,
  //       error: error
  //     })
  //   })
});
router.put('/:id',function(req,res,next){
  //console.log(req.params.id);
  User.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(result => {
    res.send({
      status: true,
      data: result
    })
  })
  .catch(err => {
    let errors = err.errors ? err.errors[0].message : err
    res.send({
      status: false,
      error: error
    })
  })
})
router.delete('/:id',function(req,res,next){
  User.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(users => {
    res.json(users)
  })
  // .then(result => {
  //   res.send({
  //     status: true,
  //     data: result
  //   })
  // })
  // .catch(err => {
  //   let errors = err.errors ? err.errors[0].message : errres.send({
  //     status: false,
  //     error:error
  //   })
  // })
})
module.exports = router;
