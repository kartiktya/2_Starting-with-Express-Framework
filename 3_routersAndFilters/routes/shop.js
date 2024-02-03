const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {               //here get will do exact mathch with url. GET and POST do exact match
    res.send('<h1>Hello from Express!</h1>');       //here get is used so fn will run only when '/' will be in request url.
                                                    //use will run everytime whenever there will be '/' in url like
});                                                 //in '/add-product'        

module.exports = router;