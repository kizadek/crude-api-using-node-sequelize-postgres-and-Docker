

// @ METHOD GET  '/dev/config'
//@ STATUS  
const getConfig=(req,res,next)=>{
    res.status(200).json({
        success: true,
        msg: 'config'
    })
}

// @ METHOD GET  '/dev/Version'
//@ STATUS  
const getVersion=(req,res,next)=>{
    res.status(200).json({
        success: true,
        msg: 'version'
    })
}


// @ METHOD GET  '/dev/config'
//@ STATUS  
const getSeq=(req,res,next)=>{
    res.status(200).json({
        success: true,
        msg: 'Seq'
    })
}


module.exports= {
    getConfig,
    getVersion,
    getSeq
}