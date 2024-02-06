const path = require('path');

const rootDir = require('../util/path.js');

const express = require('express');

const productsController = require('../controllers/products.js');
const contactUsController = require('../controllers/contactUs.js');


const router = express.Router();    // creating router object

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.get('/contactUs', contactUsController.contactUs);

router.post('/success', contactUsController.success);

module.exports = router;  