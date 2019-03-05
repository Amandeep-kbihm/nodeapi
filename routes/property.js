var express = require('express');
var router = express.Router();
var Property = require('../models').Property

router.post('/',function(req,res,next){
    title = req.body.title;
    content = req.body.content;
    status = 1;
    Property.create({
        title: title,
        content: content,
        status:status
    })
    .then(result => {
        res.send({
            status:true,
            data:result
        })
    })
    .catch(err => {
        let error= err.errors ? err.errors[0].message : err;
        res.send({
            status:false,
            error:error
        })
    })
})
router.put('/:id',function(req,res,next){
    Property.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    // .then(result => {
    //     res.json({status: true, result});
    // })
    .then(result => {
        res.send({
            status:true,
            data:result
        })
    })
    .catch(err => {
        let error = err.errors ? err.errors[0].message : err;
        res.send({
            status:false,
            error:error
        })
    })
})
router.delete('/:id',function(req,res,next){
    Property.destroy({
        where:{
          id:req.params.id
        }
    })
      .then(results => {
        res.json({status: true, results});
    })
})
router.get('/:id',function(req,res,next){
    Property.findAll({
      where: {
        id:req.params.id
      }
    })
    .then(results => {
        console.log(results)
        res.json({status: true, results});
    })
})    
router.get('/', function(req, res, next) { 
    Property.findAll().then(results => {
        res.json({status: true, results});
    })
});
router.patch('/:id', function(req, res, next) { 
    Property.findAll().then(results => {
        res.json({status: true, results});
    })
});    
module.exports = router
