const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
router.get('/index', controller.index);
router.post('/insert-chart-details', controller.insertChartDetails);
router.get('/get-chart-details', controller.getChartDetails)
module.exports = router;