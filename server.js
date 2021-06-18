const express = require("express");
const morgan = require("morgan");
const {connectDB} = require('./app/util/database');
require("colors");



connectDB();
// initializing express app
const app = express();
const PORT = process.env.PORT || 5000

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



        app.listen(PORT,console.log(`server is runing on port::${PORT}`.cyan));

