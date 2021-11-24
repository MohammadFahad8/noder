
// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User =sequelize.define('User',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   age: {
      type: DataTypes.INTEGER,
   },
   email: {
      type: DataTypes.STRING,
   },
   createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
      
    //   User.hasMany(models.Tasks, { as: 'categories' })
    // }
  });
  
    
  User.associate = (models) =>{
    
    User.hasMany(models.Tasks, {
      as: 'Task',
      foreignKey: 'userId'});
  };
  
  // User.init({
  //   name: DataTypes.STRING,
  //   age: DataTypes.INTEGER,
  //   email: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'User',
  // });
  return User;
};