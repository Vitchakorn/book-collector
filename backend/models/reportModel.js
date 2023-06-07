const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    typeOfReport: {
        type: String,
        require: [true, "Please add the username"]
    },
    subject: {
        type: String,
        require: [true, "Please add the email address"],
        unique: [true, "Email address is already taken"]
    },
    details: {
        type: String,
        require: [true, "Please add password"]
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
},{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);