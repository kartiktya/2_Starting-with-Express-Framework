const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();  

const adminRoutes = require('./routes/admin'); //order of import doesn't matter
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);   
//app.use('/shop', shopRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
})

app.listen(3000);