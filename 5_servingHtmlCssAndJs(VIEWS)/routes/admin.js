const path = require('path');

const rootDir = require('../util/path.js');

const express = require('express');

const router = express.Router();    // creating router object

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {

    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
   
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/contactUs', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views' , 'contactUs.html'));
});

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views' , 'contactUsFormSubmissionMessage.html'));
});

module.exports = router;  