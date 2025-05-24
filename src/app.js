require('dotenv').config(); //load environment variables from .env file 
const express = require('express');
const mongoose = require('mongoose'); 
const connectDB = require('./config/database'); //connect to database 


const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
})

// app.listen(3000, ()=> {
//     console.log('Server is listening on port 3000');
// })
connectDB().then(() => {
  console.log("database connected sucessfully");
  app.listen(3000, () => {
    console.log("Server is listening");
  }); 
}
).catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1); // Exit the process with failure
});