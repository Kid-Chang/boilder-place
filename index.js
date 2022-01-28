const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose
    .connect(
        `mongodb+srv://Kid-Chang:${process.env.REACT＿APP＿DB_PASSWORD}@boilderplate.zxcps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    )
    .then(() => console.log("MongoDB conntected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world hello"));

app.listen(port, () => console.log(`example app listening on Port ${port}!`));
