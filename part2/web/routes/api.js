var express = require('express'); //import express from 'express' 와 같은 의미
var router = express.Router();

router.get('/first', function(req, res) {
  res.json({id: 1, name: 'first'}); //json 대신에 send 들어가면 텍스트가 나온다. render 라고 하면 템플릿이 나온다.
});

module.exports = router;
