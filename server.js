
const express = require('express')
require('colors')
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express()

const db = require('./app/util/database');

//Database Connection
db.authenticate().then(()=>{
    console.log('Database connected...'.rainbow.bold)
})



//set were env file is
dotenv.config({path:"./app/config/config.env"})

// json body passer
app.use(express.json())

//set logger
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Set  proper Headers on backend 
// app.use((req,res,next )=>{
//     res.setHeader('Access-Control-All-Methods', 'GET','POST','PUT','DELETE');
// })
// Mount Routes
app.use('/dev',require('./app/routes/dev'))
app.use('/users',require('./app/routes/users'))


// set port, listen for requests
const PORT = process.env.PORT || 5000
app.use((req,res,next)=>res.status(404).json({sucess:false,msg:'no such route'}))



const server = app.listen(PORT,console.log(`server is runing on port::${PORT}`.cyan));

// unhundled promisses rejection
process.on("unhandledRejection", (err,promis)=>{
console.log(`ERROR: ${err.message}`.bold.blue)
    //close saver
    server.close(()=> process.exit(1))
})


