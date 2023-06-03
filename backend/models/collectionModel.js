const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add collection name"],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    books: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    }],

}, {
    timestamps: true,
}
);

module.exports = mongoose.model("Collection", collectionSchema);