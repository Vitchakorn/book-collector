const express = require ("express");
const {getBooks, getImg, getBook, deleteBook} = require("../controllers/bookController");
const router = express.Router();


router.route('/').get(getBooks);
router.route('/:id').get(getBook).delete(deleteBook);
router.route('/:id/image').get(getImg);

  
// router.get('/:id/image', async (req, res) => {
//     try {
//       const book = await Book.findById(req.params.id);
//       if (!book || !book.image) {
//         return res.status(404).json({ error: 'Image not found' });
//       }
//       res.set('Content-Type', book.image.contentType);
//       res.send(book.image.data);
//     } catch (error) {
//       console.log('Error retrieving image:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  


module.exports = router;