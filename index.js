const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

//CONNECT DATABASE

// mongoose.connect("mongodb+srv://leduc2801:<Y6Dckan4sFxNsYqP>@cluster0.0a0e8ao.mongodb.net/?retryWrites=true&w=majority", () => {
//     console.log("Database is connected to MongoDB");
// });

app.get("/api",(req,res)=>{
    res.status(200).json("Hello, World!");
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.listen(8000, () => {
    console.log("Server is running...");
});