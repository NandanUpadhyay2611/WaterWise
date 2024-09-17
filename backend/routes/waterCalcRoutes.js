const express = require('express');
const {waterUsageCalc}=require('../controllers/waterUsageCalc')
const router = express.Router();


router.post('/waterCalc', waterUsageCalc);


// router.post('/login', authUser);

module.exports = router;