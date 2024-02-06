const fs = require('fs');

const path = require('path');
const rootDir = require('../util/path.js');
//const { error } = require('console');

const p = path.join(rootDir, 'data', 'products.json');
const getProductsFromFile = (cb) => {
    

    fs.readFile(p, (error, fileContent) => {
        if(error){
           return cb([]);
        }
        else {
            return cb(JSON.parse(fileContent));
        }
    });

};

module.exports = class product {
    
    constructor(t) {
        this.title = t;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
        // fs.readFile(p, (error, fileContent) => {
        //     let products = [];
            
            
        // });
    }


    static fetchAll(cb) {
        getProductsFromFile(cb);     
    }
}