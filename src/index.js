import mongoose from "mongoose";


import dotenv from "dotenv"



import express from "express"
import connnectDB from "./db/index.js";

dotenv.config()


connnectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log("server is running at port" , process.env.PORT );
        
    })
})
.catch((error) => {
    console.log("mongodb error fucked up" , error);
    
})
/*
const app = express();
(async () => {
    try {
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
       app.on("error", (error) => {
        console.log("Error" , error)
        throw error;
       })
       app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`)
       } )
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);   
        throw error;
    }
})()
    */