var express = require('express'); //import express from 'express' 와 같은 의미
var router = express.Router();

router.get('/user/:id', function(req, res) {
  const id = req.params.id;
  const obj = {
    id: id,
    name: 'John',
    age: 30,
    job: 'developer',
    city: 'New York'
  };
  res.json(obj); //res.json 대신에 res.send 들어가면 텍스트가 나온다. res.render 라고 하면 템플릿이 나온다.
});

module.exports = router;
