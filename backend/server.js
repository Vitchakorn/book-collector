const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")
const cors = require('cors')
const multer = require('multer');
const Book = require("./models/bookModel");

connectDb();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/collections", require("./routes/collectionRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));
app.use(errorHandler);


// Create a storage engine for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });


// Handle the image upload route
app.post('/api/books', upload.single('image'), (req, res) => {
    const { name, author, category, description } = req.body;
  
    // Create a new Collection document
    const collectionData = {
        name,
        author,
        category,
        description,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype,
        },
    };
  
    // Save the collection to the database
    Book.create(collectionData)
      .then((collection) => {
        res.status(201).json({ message: 'Collection created successfully', collection });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to create collection' });
      });
  });
  
  

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
