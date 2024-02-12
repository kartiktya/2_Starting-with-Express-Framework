const express = require('express');

const expenseController = require('../controllers/expense.js');


const router  = express.Router();


router.post('/add-expense', expenseController.saveExpense);

router.get('/get-expenses', expenseController.getExpenses);

router.delete('/delete-expense/:expenseId',expenseController.deleteExpense);

//router.post('edit-expense/:expenseId', expenseController.editExpense);



module.exports = router;