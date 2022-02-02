const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/key");
const { User } = require("./models/User");
const req = require("express/lib/request");
require("dotenv").config();

// application/x-www-form-urlencoded, value possible "input"
app.use(bodyParser.urlencoded({ extended: true }));
// application/json, value possbile "input"
app.use(bodyParser.json());

mongoose
    .connect(config.mongoURI)
    .then(() => console.log("MongoDB conntected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world hello~"));

app.post("/register", (req, res) => {
    //get data from client when register, they put in database.

    const user = new User(req.body);
    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        }); // if success, only return doc.
    });
});

app.listen(port, () => console.log(`example app listening on Port ${port}!`));
