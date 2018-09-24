
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const path = require('path');
const bodyParser = require('body-parser');


// eport to excel route - creates excel spreadsheet
router.get('/', function (req, res) {

  let query = req.headers.query;
  

  res.sendStatus(200);



});








module.exports = router;
