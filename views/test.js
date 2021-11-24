'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const requireAll = require('require-all');

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

const db = { sequelize };

const modelsInitializers = Object.values(requireAll({
  dirname: __dirname,
  recursive: false,
  filter: (name) => name !== 'index.js' && name,
}));

const models = modelsInitializers.map((initializer) => {
  const model = initializer(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
  return model;
});

models.forEach((model) => {
  if (model.associate) model.associate(db);
})

models.forEach((model) => {
  if (model.associate) model.associate(models);
  db[model.name] = model;
})


Object.entries().forEach(([modelName, model]) => {
  model.associate(models);
  db[modelName] = model;
});

module.exports = db;