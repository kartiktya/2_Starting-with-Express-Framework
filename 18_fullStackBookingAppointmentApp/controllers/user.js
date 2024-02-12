const User = require('../models/user.js');

exports.saveUser = (req, res, next) => {
    
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    //console.log("name="+name);
    User.create({
        name: name,
        phone: phone,
        email: email
    })
    .then(result => {
        console.log("CREATED USER");
        res.send("success");
        //res.redirect('/user/get-users');
    })
    .catch(err => console.log(err));

};

exports.getUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
       //console.log('users='+users);
        res.send(users);
    }) 
    .catch(err => console.log(err));
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    console.log('id='+ userId);
     User.findByPk(userId)
    .then(user => {
        return user.destroy();
  })
  .then(result => {
    console.log('DESTROYED USER');
    res.send('deleted')
    //res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
}

// exports.allUsers = (req, res, next) => {
//     res.send("All Users");
// }