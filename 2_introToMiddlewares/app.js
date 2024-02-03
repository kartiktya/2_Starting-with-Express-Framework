const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
   
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
    //next(); //Allows the request to continue to the next middleware in line
});

//const server = http.createServer(app);   //this route having requestHandler fn will be executed for every incoming requests

app.listen(3000);