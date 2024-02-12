const express = require('express');

const userController = require('../controllers/user.js');


const router  = express.Router();

//const userController = require('../controllers/user.js');


router.post('/add-user', userController.saveUser);

router.get('/get-users', userController.getUsers);

router.delete('/delete-user/:userId',userController.deleteUser);

//router.get('/', userController.allUsers);

module.exports = router;