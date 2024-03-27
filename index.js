
// const express = require('express');
// const errorHandler = require('./middleware/errorhandler');
// const { connect } = require('./routes/contactRoutes');
// const connectDb = require('./config/dbConnection');
// const dotenv = require('dotenv').config();
// connectDb();
// const app = express();
// const port = process.env.PORT || 5000;
// app.use(express.json());
// app.use('/api/contacts',require("./routes/contactRoutes"))
// app.use('/api/users',require("./routes/userRoutes"))
// app.use(errorHandler);
// app.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
// });
const express = require("express");
const app = express();
const errorHandler = require("../express1/middleware/errorhandler");
const mongoose = require("mongoose");
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
connectDb();
const cors = require("cors");
const bcrypt = require("bcrypt");
app.use(cors());
const User = require("./models/credentialsModel");
app.use(express.json());
const { 
    loginUser, 
    registerUser,  
} = require("../express1/controllers/userController");
app.post("/register",registerUser);
app.use(errorHandler);
app.listen(5000,()=>{
    console.log("Server Started")
})