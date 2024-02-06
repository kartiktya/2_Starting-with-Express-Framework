const path = require('path');
const rootDir = require('../util/path.js');

exports.contactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views' , 'contactUs.html'));
}

exports.success = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views' , 'contactUsFormSubmissionMessage.html'));
   // res.redirect('/');
}