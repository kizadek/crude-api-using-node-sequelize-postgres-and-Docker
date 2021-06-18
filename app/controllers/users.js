const users = []
//@ METHOD GET '/users/'
// Status 
const getAll = (req,res, next)=>{
   
 res.status(200).json({
     sucsses: true,
     masg: 'showing all users',
     Data: users
 })
}

//@ METHOD GET '/users/:id'
// Status 
const getONE = (req,res, next)=>{
      const filter = users.filter((number)=> number != req.params.id)

      if(filter != null){
          return res.status(400).json({
              sucsses: false,
              msg:"user not found",
              data: {}
          })
    }
        res.status(200).json({
            sucsses: false,
            msg:"user found",
            data: filter
        })
    
}

//@ METHOD POST '/users/'
// Status 
const createOne = (req,res, next)=>{
        
     res.status(201).json({
         sucsses:true,
         msg:'account created',
         data: req.body
     })
     users.push(req.body);
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
      
}

module.exports = {
    getAll,
    getONE,
    createOne,
    updateOne,
    deleteOne
}