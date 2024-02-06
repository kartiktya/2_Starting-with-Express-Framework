const path = require('path');
const rootDir = require('../util/path.js');

const Product = require('../models/product.js');

exports.getAddProduct = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {   
    Product.fetchAll((products) => {
        res.sendFile(path.join(rootDir, 'views', 'shop.html')); 
    });
    
     
 }