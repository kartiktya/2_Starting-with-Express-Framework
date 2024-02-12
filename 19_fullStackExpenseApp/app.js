const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');

const sequelize = require('./util/database.js');

const app = express();

app.use(cors());

const expenseRoutes = require('./routes/expense.js');

app.use(bodyParser.json({ extended: false }));

app.use('/user', expenseRoutes);


app.use('/', (req, res, next) => {
    res.send('main page');
});

sequelize.sync()
.then()
.catch(err => console.log(err));


app.listen(3000);