
const express = require("express")
const verifyToken = require("../middlewares/authMiddleware")
const authorizedRoles = require("../middlewares/rolesMiddleware")

const router = express.Router();
// admin routes
router.get("/admin",verifyToken,authorizedRoles("admin"),(req,res) => {
     res.json({message:"Welcome Admin"})})

// manager routes
router.get("/manager",verifyToken,authorizedRoles("admin","manager"),(req,res) => {res.json({message:"Welcome Manager"})})

// user routes
router.get("/user",verifyToken,authorizedRoles("admin","manager","user"),(req,res) => {res.json({message:"Welcome user"})})

module.exports = router;