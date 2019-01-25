const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

/*
    Data Base
*/

mongoose.connect(
    "mongodb://localhost:2701/upload",
    {
        useNewUrlParser: true
    }
);


app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);