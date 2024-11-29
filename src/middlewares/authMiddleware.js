const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) =>{
    let token;
    // extract header from the request 
    let authHeader = req.headers.Authorization || req.headers.authorization
    
    // if header is not available and doesn't starts with the Bearer don't verify the user
    if(authHeader && authHeader.startsWith("Bearer")){

        // split the token from the request header 
        token = authHeader.split(" ")[1];

        // if token is not available in the request header denied the authorization 
        if(!token){
            return res.status(401).json({message:"No token, authorization denied"})
        }
        try {
            // verify the token 
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            // add token to the user object 
            req.user = decode;

            // forward to the next request 
            next();
        } catch (error) {
            return res.status(400).json({message:"Invalid token!"})
        }
    }else{
        return res.status(401).json({message:"No token, authorization denied"})
    }
    
}

module.exports = verifyToken;