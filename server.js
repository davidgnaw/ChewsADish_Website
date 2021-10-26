const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECTION, 
   {useNewUrlParser:true},
    () =>console.log("database is conncted")    
);

app.use("/", require("./routes/recipeRouter"));

app.listen(3001, function(){

})