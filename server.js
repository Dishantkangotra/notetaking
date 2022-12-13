require("dotenv").config();
const express = require("express");
const cors = require("cors");
const noteRoute = require("./routes/noteRoute");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', noteRoute);
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("connected to",PORT);
})

const URI =process.env.MONGODB_URL;
mongoose.connect(URI,(err,db)=>{
    if(err) throw err;
    console.log("connected to mongodb");
})

