const Sequelize = require('sequelize');
const dotenv = require('dotenv')
//GET ENV VARIABLES FROM
dotenv.config({path:"./app/config/config.env"})

const db = new Sequelize('Users', 'postgres',process.env.DB_PASSWORD,{
   host: 'localhost',
   port: process.env.DB_PORT,
   dialect: 'postgres',

   pool:{
     max:5,
     min:0,
     acquire:30000,
     idle:10000
   }
});


 module.exports = db;
