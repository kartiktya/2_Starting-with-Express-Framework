const User = require('../models/expense.js');

exports.saveExpense = (req, res, next) => {
    
    const expenseAmount = req.body.expenseAmount;
    const description = req.body.description;
    const category = req.body.category;
    
    User.create({
        expenseAmount: expenseAmount,
        description: description,
        category: category
    })
    .then(result => {
        console.log("CREATED EXPENSE");
        res.send(JSON.stringify(result));
        
    })
    .catch(err => console.log(err));

};

exports.getExpenses = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.send(users);
    }) 
    .catch(err => console.log(err));
}

exports.deleteExpense = (req, res, next) => {
    const expenseId = req.params.expenseId;
    //console.log('id='+ expenseId);
     User.findByPk(expenseId)
    .then(user => {
        return user.destroy();
  })
  .then(result => {
    console.log('DESTROYED USER');
    res.send('deleted')
  })
  .catch(err => console.log(err));
}


// exports.editExpense = (req, res, next) => {
//     //const prodId = req.body.productId;
//     const expenseId = req.params.expenseId;
//     const updatedAmount = req.body.expenseAmount;
//     const updatedDescription = req.body.description;
//     const updatedCategory = req.body.category;
    
//     Product.findByPk(expenseId)
//     .then( expense => {
//         expense.expenseAmount = updatedAmount;
//         expense.description = updatedDescription;
//         expense.category = updatedImageUrl;
//         return product.save();
//     })
//     .then(result => {
//       console.log('UPDATED EXPENSE');
//       res.send('updated expense');
//     })
//     .catch(err => console.log(err));
    
//   };