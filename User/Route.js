const express = require('express');
const router = express.Router();
const {getAllCustomers} = require("../User/Controller")

router.get('/customers', getAllCustomers);  

module.exports = router;
