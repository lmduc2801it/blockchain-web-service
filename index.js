const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//IMPORT THE ROUTE
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

app.get('/',(req,res) => {
    res.send("This is Home Page");
});

//CONNECT TO DATABASE
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to database');
});

//HOW TO WE START LISTENING TO THE SERVER
app.listen(8000);
