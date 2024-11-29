const authorizedRoles = (...allowedRoles) =>{
    return (req,res,next)=>{
        // check for the allowed roles 
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"Access denied!"})
        }
        // forward to the next request 
        next();
    }
}

module.exports = authorizedRoles;