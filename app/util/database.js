const {Sequelize}= require('sequelize');

exports. connectDB= async() =>{
    const sequelize = new Sequelize('Users', 'postgres', 'pass104', {
        host: 'localhost',
        dialect: 'postgres' 
      });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.log('unable to connect to the database:::' ,error)
    }
}
 



