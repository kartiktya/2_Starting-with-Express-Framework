const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment', 'root', 'mysql@50', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;