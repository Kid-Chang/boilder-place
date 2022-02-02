const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; // saltRounds set lang of salt number.

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

// pre is mongoose method. before {save} method, use this code and go on.
userSchema.pre("save", function (next) {
    // "next" callback function is call real next("save") method
    // password encryption.

    var user = this; // direct userSchema.

    if (user.isModified("password")) {
        // use this function only password create or change.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            // salt using encrypt
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                // first arg is plan password(before encrypt)
                // third arg is callback fuction. it's second arg is encrypt password.
                if (err) return next(err);
                user.password = hash; // if encrypt success, change user.password.
                next(); // call real "save" function.
            });
        });
    }
});

const User = mongoose.model("User", userSchema);
// mongoose.model( "Using Name==alias", using Schema )

module.exports = { User };
