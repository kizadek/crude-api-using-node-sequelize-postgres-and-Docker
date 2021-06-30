const users = require('../models/users');
const db = require('../util/database');

/**
 * 
 *CRUD CONTROLLERS
 */



// @ GET-ALL
// METHOD GET '/users/'
// Status 
const getAll = async(req,res, next)=>{
   
 try {
     const allUsers =  await users.findAll();
     if(!allUsers){
         return res.status(200).json({
             sucsses: true,
             msg: 'sorry no users are signed up yet'
         })    
     }
     return res.status(200).json(allUsers);
 } catch (error) {
     console.log(`ERROR::` + error)
     return res.status(500).json({msg:'this might be a internet server error try agin'})
 }
}

//@ METHOD GET '/users/:id'
// Status 
const getONE = async(req,res, next)=>{
    try {
        const user = await Users.findByPK(req.params.id)
        if(!user){}
    } catch (error) {
        
    }
    
}

// @ CREATE USER
//@ METHOD POST '/users/'
// Status 
const createOne = async(req,res, next)=>{
        
   try {
       const  userModel = {
           username: req.body.username,
           age: req.body.age,
           email: req.body.email,
           password: req.body.password
       }
       console.log(userModel);
       const createdUser = await users.create(userModel);
       return res.status(201).json({
           sucsses:true,
           msg: 'thanx for singing up with us',
           data: createdUser
       })
   } catch (error) {
       console.log(`ERROR::` + error)
       return res.status(500).json({sucsses: false, msg: 'fiald'});
   }
}

//@ METHOD PUT '/users/:id'
// Status 
const updateOne = (req,res, next)=>{
     res.status(200).json({
         sucsses: true,
         msg: 'user information updated',
       Data: req.body
     })
}

//@ METHOD DELETE '/users/:id'
// Status 
const deleteOne = (req,res, next)=>{
    res.status(200).json({sucsses:true})  
}

module.exports = {
    getAll,
    getONE,
    createOne,
    updateOne,
    deleteOne
}