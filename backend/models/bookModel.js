const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        data: Buffer,
        contentType: String,
      },
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("Book", bookSchema);