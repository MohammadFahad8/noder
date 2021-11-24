// 'use strict';

// const Sequelize = require('sequelize');
// const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
// const requireAll = require('require-all');

// const sequelize = config.use_env_variable
//   ? new Sequelize(process.env[config.use_env_variable], config)
//   : new Sequelize(config.database, config.username, config.password, config);

// const db = { sequelize };

// const modelsInitializers = Object.values(requireAll({
//   dirname: __dirname,
//   recursive: false,
//   filter: (name) => name !== 'index.js' && name,
// }));

// const models = modelsInitializers.map((initializer) => {
//   const model = initializer(sequelize, Sequelize.DataTypes);
//   db[model.name] = model;
//   return model;
// });

// models.forEach((model) => {
//   if (model.associate) model.associate(db);
// })

// models.forEach((model) => {
//   if (model.associate) model.associate(models);
//   db[model.name] = model;
// })


// Object.entries().forEach(([modelName, model]) => {
//   model.associate(models);
//   db[modelName] = model;
// });

// module.exports = db;











'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    
    const model = require(path.join(__dirname+'../models/', file))(sequelize, Sequelize.DataTypes);
console.log(model);

    
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
                                                    //relations THIS IS WORKING AND I AM JUST CURIOUS WHETHER TO USE THIS APPROACH OR NOT


db.user = require("../models/user.js")(sequelize, Sequelize);
db.tasks = require("../models/Task.js")(sequelize, Sequelize);

db.user.hasMany(db.tasks, { as: "user_tasks",foreignKey: "userId" });
db.tasks.belongsTo(db.user, {
  foreignKey: "userId",
  as: "task_user",
});
module.exports = db;
