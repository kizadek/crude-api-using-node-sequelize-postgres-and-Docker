

// @ METHOD [GET]  ../dev/config
//@ STATUS  
const getConfig=(req,res,next)=>{
   return res.status(200).json({packJson})
}

// @ METHOD [GET]  ../dev/Version
//@ STATUS  
const getVersion=(req,res,next)=>{
   return res.status(200).json({'nps Backend': packJson.version});
}


// @ METHOD GET  ../dev/seq
//@ STATUS  
const getSeq=(req,res,next)=>{
    try {
        
        return res.status(200).json({
            success: true, 
            msg: 'Sequelize Connection established'
        })  
        next(); 
    } catch (error) {
        
    }
   
}


module.exports= {
    getConfig,
    getVersion,
    getSeq
}