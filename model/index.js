const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);

const dbConfig = require('../database/config');
let sequelize;
sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging:dbConfig.logging,
  dialectOptions:dbConfig.dialectOptions,
  timezone: dbConfig.timezone,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
    },
  });
const db = {Sequelize : Sequelize,sequelize:sequelize};
fs
.readdirSync(__dirname)
  .filter(file =>(file.indexOf('.') !== 0)&&(file !== basename)&&(file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });
  //admin 

  






  
  
  module.exports = db;








