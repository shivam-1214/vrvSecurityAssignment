const express = require("express")
const {register,login} = require("../controllers/authController")
const router = express.Router();

// register route 
router.post("/register",register);

// login route for authentication 
router.post("/login",login);

module.exports = router;