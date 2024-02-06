const path = require('path');
const rootDir = require('../util/path.js');


exports.get404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));
}