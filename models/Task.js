// 'use strict';
// const {
//   Model
// } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const Task = sequelize.define('Task', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   userId: {
      type: DataTypes.INTEGER,
   },
    });
//  associate=(models)=> {
      // define association here
      
    //   Tasks.belongsTo(models.User,{
    //     foreignKey: 'userId',
    //     onDelete: 'CASCADE'
    //   })
    // }
    
       
    Task.associate = function(models) {
      Task.belongsTo(models.User, { 
        as:'owne',
        foreignKey:'userId',
         onDelete: "cascade"
        });
    };
  
    return Task;
}
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecsycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
      
    //   Tasks.belongsTo(models.User,{
    //     foreignKey: 'userId',
    //     onDelete: 'CASCADE'
    //   })
    // }

 
  // Tasks.init({
  //   title: DataTypes.STRING,
  //   userId: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Tasks',
  // });
  