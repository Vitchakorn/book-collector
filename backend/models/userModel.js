const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the username"]
    },
    email: {
        type: String,
        require: [true, "Please add the email address"],
        unique: [true, "Email address is already taken"]
    },
    password: {
        type: String,
        require: [true, "Please add password"]
    }
},{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);