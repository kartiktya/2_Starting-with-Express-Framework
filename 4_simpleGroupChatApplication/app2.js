const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { error } = require('console');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', (req, res, next) => {
    res.send(
    `<form onSubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="POST">
    <input type="text" id="username" name="username" placeholder="username">
    <button type="submit">Login</button>
    </form>`
    );
});

// app.post('/main', (req, res, next) => {
//     //console.log(req.body);
//     res.redirect('/');
// });

app.post('/msg', (req, res, next) => {
    console.log("msg="+ req.body.username);
    console.log("msg="+ req.body.message);
    fs.writeFile('./4_simpleGroupChatApplication/message.txt', `${req.body.username}:${req.body.message}`, {flag: 'a'}, (error) => {
        if(error)   console.log(error);
        res.statusCode = 302;
    });
    res.redirect('/');
});

app.use('/', (req, res, next) => {
       fs.readFile('./4_simpleGroupChatApplication/message.txt', (error,data) => {
                if(error){
                    console.log(error);
                    data = 'No chat exists';
                }
    
                res.send(
                `${data}<form onSubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/msg" method="POST">
                <input type="text" id="message" name="message">
                <input type="hidden" name="username" id="username">
                <button type="submit">Send</button>
                </form>`
                );
                
            } );            
});

app.listen(3000);