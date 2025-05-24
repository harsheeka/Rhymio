const express = require('express');
const mongoose = require('mongoose'); 
require('dotenv').config(); //load environment variables from .env file (must be called before accessing env variables)
const connectDB = require('./config/database'); //connect to database 


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
})


connectDB().then(() => {
  console.log("database connected sucessfully");
  app.listen(PORT, () => {
    console.log("Server is listening");
  }); 
}
).catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1); // Exit the process with failure
});