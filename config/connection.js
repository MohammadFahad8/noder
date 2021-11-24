const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:pakistan123@localhost:5432/demo') 
try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  module.exports = sequelize;