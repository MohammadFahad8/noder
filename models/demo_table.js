// 'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var  demo_table = sequelize.define('demo_table', {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
    name: {
      type: DataTypes.STRING,
   },
   address: {
      type: DataTypes.STRING,
      allowNull: false,
   },
  

  });
  // demo_table.init({
  //   name: DataTypes.STRING,
  //   address: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'demo_table',
  // });
  return demo_table;
};