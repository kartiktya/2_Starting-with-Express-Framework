//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');

const sequelize = require('./util/database.js');

const app = express();

app.use(cors());

const userRoutes = require('./routes/user.js');

app.use(bodyParser.json({ extended: false }));

app.use('/user', userRoutes);

// app.post('/add-user', (req, res, next) => {
//     res.send('hello1');
// });

// app.get('/add-user', (req, res, next) => {
//     res.send('hello2');
// });

app.use('/', (req, res, next) => {
    res.send('hello');
});

sequelize.sync()
.then()
.catch(err => console.log(err));

//const server = http.createServer(app);

app.listen(3000);