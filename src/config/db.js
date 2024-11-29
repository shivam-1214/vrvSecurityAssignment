const mongoose = require("mongoose")

const connect = async () =>{

    try {
        // connect with the mongo db 
    const connect = await mongoose.connect(process.env.DB_URI)

    // show the connected message 
    console.log(
        `Database connected: ${connect.connection.host}, ${connect.connection.name}`
    );
        
    } catch (error) {
        console.log(error);
        // if there is any error exit the process 
        process.exit(1);
    }
}

module.exports = connect