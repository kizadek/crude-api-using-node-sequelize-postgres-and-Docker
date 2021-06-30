const Sequelize = require('sequelize');

//GET ENV VARIABLES FROM
const sequelize = new Sequelize('Users', 'postgres', 'pass104', {
    port:5433,
    host: 'localhost',
    dialect: 'postgres' 
  });

module.exports = sequelize;
