const express = require("express");
const morgan = require("morgan");
require("colors");


// initializing express app
const app = express();

const sequelize = require('./app/util/database');
const PORT = process.env.PORT || 6000

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//set proper Headers on Backend
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization')
    next();
})
// set a logger
app.use(morgan('dev'))

//@ ROUTES
app.use('/dev',require('./app/routes/dev')) // All test routes 
app.use('/users',require('./app/routes/users')) // USER CRUD

(async()=>{
    try {

         sequelize.sync(
             {force:false}
         );
        app.listen(PORT,console.log(`server is runing on port::${PORT}`.cyan));

    } catch (error) {
        console.log('Error::',error)
    }

})();

        
