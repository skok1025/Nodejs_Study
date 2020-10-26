var express = require('express');
var router = express.Router();
const {User} = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

router.get('/:id', function(req, res, next) {
  User.findAll({
    where: req.params,
  })
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

router.post('/', function(req, res, next) {
  res.send('respond with post call');
  User.create({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
    comment: req.body.comment,
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

router.put('/:id', function(req, res, next) {
  User.update(req.body, {where: {id: req.params.id}})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

router.delete('/:id', function(req, res, next) {
  res.send('respond with delete call');
  User.destroy({where: {id: req.params.id}})
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});


module.exports = router;
