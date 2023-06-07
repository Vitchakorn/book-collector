const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    typeOfReport: {
        type: String,
        require: [true, ""]
    },
    subject: {
        type: String,
        require: [true, ""],
    },
    details: {
        type: String,
        require: [true, ""]
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

module.exports = mongoose.model("Reposts", userSchema);