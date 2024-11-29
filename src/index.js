const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express();

//middleware
app.use(express.json());

// Routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

//Start the server
const port = process.env.PORT || 7002;
app.listen(port,()=>{
    console.log(`Server is runnung on port ${port}`);
    connect();
})