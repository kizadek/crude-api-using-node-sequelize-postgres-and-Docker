const Sequelize =require('sequelize');
const db =require('../util/database');


const user = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    age:{
       type: Sequelize.INTEGER,
       allowNull:false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

module.exports = user;