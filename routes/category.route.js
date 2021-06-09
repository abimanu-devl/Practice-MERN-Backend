const express = require('express');
const router = express.Router();
const { addCategory, getCategories,getVehiclesForCategory,calculateAmount } = require('../controller/category.controller');

router.post('/add', addCategory);
router.get('/', getCategories);
router.get('/:id', getVehiclesForCategory);
router.get('/totalAmount/:id',calculateAmount);

module.exports = router;