const UserSchema = require("../models/userModel")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const register = async (req,res) =>{

    try {
        // destructure the request body for username and password
        const {username, password,role} = req.body;

        // check for that user is already available in the db or not 
        const user = await UserSchema.findOne({username});

        // if already available then send the message to the client 
        if(user) {return res.status(404).json({message:`User already available with ${username}`})};

        // hash password for getting more security 
        const hashedPassword = await bcrypt.hash(password,10);

        // svae the user into database
        const newUser = new UserSchema({username,password:hashedPassword,role})
        await newUser.save();

        // send response to the client 
        return res.status(201).json({message:`user registered with ${username}`})
    } catch (error) {
        return res.status(501).json({message:"Error"})
    }
    
}
const login = async (req,res) =>{
    // destructure the request body for username and password
    const {username, password} = req.body;

    try {
        // check for the user availability
        const user = await UserSchema.findOne({username});

        // if user doesn't found send response to the client that user does'nt available in the DB
        if(!user) {return res.status(404).json({message:`User with ${username} not found`})};

        // check for password match the requested password matches with the user details or not 
        const isMatch = await bcrypt.compare(password, user.password)

        // if password doesn't match don't allow to the user to login
        if(!isMatch) {return res.status(400).json({message:`Wrong password`})}

        // make jwt token withrequest user id and role of the requested user and token will be valid only for 1 hour
        const token = jwt.sign({
            id:user._id,
            role:user.role
        },
        process.env.JWT_SECRET,
    {expiresIn:"1h"}
    )

    // send token to the client as an response 
        return res.status(200).json({token})

    } catch (error) {
        return res.status(501).json({message:"Error"});
    }
}

module.exports ={
    register,
    login
}