const Sequelize = require('sequelize');

//GET ENV VARIABLES FROM
const sequelize = new Sequelize('Users', 'postgres', 'pass104', {
    host: 'localhost',
    port:5433,
    dialect: 'postgres' ,
    logging: false
  });

module.exports = sequelize;
