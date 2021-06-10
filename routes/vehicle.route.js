const express = require('express');
const router = express.Router();
const { addVehicle, getVehicles } = require('../controller/vehicle.controller');

router.post('/add', addVehicle);
router.get('/', getVehicles);
//router.get('/:id',getVehiclesForCategory)

module.exports = router;
