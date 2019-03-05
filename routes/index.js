var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
    res.send('dfff')
    let hash = bcrypt.hashSync('myPassword', 10);
    console.log('hash ', hash);
    console.log('mathc', bcrypt.compareSync('somePassword', hash))
});

module.exports = router;












