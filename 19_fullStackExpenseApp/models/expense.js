const Sequelize = require('sequelize');

const sequelize = require('../util/database.js');

const User = sequelize.define('expense', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    expenseAmount: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    category: {
        type:Sequelize.STRING,
        allowNull: false
    }
  });
  
  module.exports = User;
  