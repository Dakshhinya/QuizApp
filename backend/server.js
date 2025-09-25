const express = require("express");
require('dotenv').config();
const authRoutes=require('./routes/authRoutes')
const cors=require('cors');

const app=express();
app.use(express.json());

app.use(cors());
app.use('/api/auth',authRoutes);

app.listen(3000,()=>{
    console.log("Server listening to the port 3000 ")   
})