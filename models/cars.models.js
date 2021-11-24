// const Sequelize = require('sequelize')

// const sequelize = require('../config/connection.js');
module.exports = (sequelize,DataTypes)=>{
var Cars = sequelize.define('cars', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   name: {
      type: DataTypes.STRING,
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false,
   },
});
return Cars;
}