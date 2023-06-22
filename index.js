const express = require("express");
const { PORT } = require("./config");  
 
const app = express();

let user = null;
let products = [];

app.use(express.json());

app.use("/products", (req, res, next) => {
    if( user && user.email === ADMIN.email && user.password === ADMIN.password ){
        return next();
    }
    res.json({ status: false, message: "You are not admin"});
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    user = { email, password };
    res.json({ status: true });
});

app.get("/products", (req, res) => {
    res.json({ status: true, data: "This is data" });
});

app.post("/products", (req, res) => {
    const { name, price } = req.body;
    const id = Date.now();
    const newItem = {
        id,
        name,
        price,
    };
    console.log(newItem);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});




//IMPORT THE ROUTE
// const postRoute = require('./routes/posts');
// app.use('/posts', postRoute);

// app.get('/',(req,res) => {
//     res.send("This is Home Page");
// });

//CONNECT TO DATABASE
// mongoose.connect(process.env.MONGODB_URL, () => {
//     console.log('Connected to database');
// });

//HOW TO WE START LISTENING TO THE SERVER
// app.listen(3000);
