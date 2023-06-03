const express = require ("express");
const {getBooks, getImg, getBook, deleteBook} = require("../controllers/bookController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();


router.use(validateToken);
router.route('/').get(getBooks);
router.route('/:id').get(getBook).delete(deleteBook);
router.route('/:id/image').get(getImg);



module.exports = router;