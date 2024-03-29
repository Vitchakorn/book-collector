const express = require ("express");
const {getCollections, createCollection, getCollection, updateNameCollection, addBook, deleteCollection, pullBook} = require("../controllers/collectionController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();


router.use(validateToken);
router.route('/').get(getCollections).post(createCollection);
router.route('/:id').get(getCollection).put(updateNameCollection).delete(deleteCollection);
router.route('/:id/book').put(addBook).post(pullBook);


module.exports = router;