const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true, // remove space between text
        unique: 1,
    },
    password: {
        type: String,
        maxlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String, // use not only Object, but also type.
    token: {
        type: String,
    },
    tokenExp: {
        type: Number, // token expiration period
    },
});

const User = mongoose.model("User", userSchema);
// mongoose.model( "Using Name==alias", using Schema )

module.exports = { User };
