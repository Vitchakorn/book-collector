const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");



//@desc Get all book
//@route GET /api/books
//@access private
const getBooks = asyncHandler(async (req, res) =>{
    const books = await Book.find();
    res.status(400).json(books);
});

const getImg = asyncHandler(async (req, res) => {
    const bookId = req.params.id;
  
    Book.findById(bookId)
      .then((book) => {
        if (!book || !book.image || !book.image.data) {
          return res.status(404).json({ error: 'Image not found' });
        }
  
        res.set('Content-Type', book.image.contentType);
        res.send(book.image.data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve image' });
      });
  });


//@desc Create new contacts
//@route Post /api/{users}/collection
//@access private


// // JSON
// const createBook = asyncHandler(async (req, res) =>{
//     console.log("new request is ", req.body);
//     const {name, author, category, description} = req.body;
//     if(!name || !author || !category || !description){
//         res.status(400);
//         throw new Error("All fields are mandatory");
//     }

//     if (!req.file) {
//         res.status(400);
//         throw new Error("Image file is mandatory");
//       }

//     const book = await Book.create({
//         name,
//         author,
//         category,
//         description

//     });
//     res.status(201).json(book);
// });

// const createBook = asyncHandler(async (req, res) => {
//     const { name, author, category, description } = req.body;
  
//     if (!name || !author || !category || !description) {
//       res.status(400);
//       throw new Error("All fields are mandatory");
//     }
  
//     if (!req.file) {
//       res.status(400);
//       throw new Error("Image file is mandatory");
//     }
  
//     const book = Book.create({
      // name,
      // author,
      // category,
      // description,
//       image: {
//         data: req.file.buffer,
//         contentType: req.file.mimetype,
//       },
//     });
  
//     await book.save();
  
//     res.status(201).json(book);
//   });


//@desc Get contacts
//@route Get /api/{users}/collection
//@access private
const getBook = asyncHandler(async (req, res) =>{
    const book = await Book.findById(req.params.id);

    if(!book) {
        res.status(404);
        throw new Error("book not found");
    }
    res.status(401).json(book);
});


//@desc Delete new contacts
//@route Delete /api/{users}/collection/:collection_id
//@access private
const deleteBook = asyncHandler(async (req, res) =>{
    const book = await Book.findById(req.params.id);
    if(!book) {
        res.status(404);
        throw new Error("book not found");
    }
    await Book.findByIdAndRemove(req.params.id);
    res.status(200).json(book);
});


module.exports = {getBooks, getImg, getBook, deleteBook};