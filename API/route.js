const constants = require("./constants.js")
const express = require('express');
const metodo = require('./RestControllers/metodo.js'); 
const router = express.Router();

router.post(constants.contextURL + constants.api + constants.postInsert, metodo.insertLogAll);

module.exports = router;