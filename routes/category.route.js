const express = require('express');
const router = express.Router();
const { addCategory, getCategories,getVehiclesForCategory,calculateAmount,getCategoryById } = require('../controller/category.controller');

router.post('/add', addCategory);
router.get('/', getCategories);
router.get('/getVehicles/:id', getVehiclesForCategory);
router.get('/totalAmount/:id',calculateAmount);
router.get('/:id',getCategoryById);

module.exports = router;