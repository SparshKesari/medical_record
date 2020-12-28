const express = require("express")
const app = express()
const env = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes.js')

//config dotenv file
env.config();

//Mongo db connection
mongoose.connect(process.env.DB ,{ useUnifiedTopology: true ,useNewUrlParser: true }, (err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log('Connected to db');
    }
})

//middlewars
app.use(cors());
app.use(express.json())


//Routes
app.use('/api/', userRoutes);
app.use('/api/', userRoutes);

// listening to port
app.listen(process.env.PORT , ()=>{console.log('Listening on port 8080..')});