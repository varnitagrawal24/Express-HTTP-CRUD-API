const errorLogger=(error,res,req,next)=>{
    console.error(error)
    next(error);
}
const sendError=(error,req,res,next)=>{
    res.status(error.statusCode).json({
        message:error.message
    })
}

const pathError=(req,res)=>{
    res.status(404).json({
        message:'Path not found'
    })
}

module.exports={pathError,errorLogger,sendError}