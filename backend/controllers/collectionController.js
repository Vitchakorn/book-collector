const asyncHandler = require("express-async-handler");
const Collection = require("../models/collectionModel");

//@desc Get all Collections
//@route GET /api/{users}/collection
//@access private
const getCollections = asyncHandler(async (req, res) =>{
    const collections = await Collection.find({user_id: req.user.id});
    res.status(400).json(collections);
});

// const getBooks = asyncHandler(async (req, res) =>{
//     const books = await Collection.findById(req.params.id).books;
//     res.status(400).json(books);
// });

//@desc Create new Collections
//@route Post /api/{users}/collection
//@access private
const createCollection = asyncHandler(async (req, res) =>{
    console.log("new request is ", req.body);
    const {name} = req.body;
    if(!name){
        res.status(400);
        throw new Error("please name");
    }
    const collection = await Collection.create({
        name,
        user_id: req.user.id
    });
    res.status(201).json(collection);
});

//@desc Get Collections
//@route Get /api/{users}/collection/:collection_id
//@access private
const getCollection = asyncHandler(async (req, res) =>{
    const collection = await Collection.findById(req.params.id);
    if(!collection) {
        res.status(404);
        throw new Error("Collection not found");
    }
    res.status(401).json(collection);
});


//@desc Update new Collections
//@route Put /api/{users}/collection/:collection_id
//@access private
const updateNameCollection = asyncHandler(async (req, res) =>{
    const collection = await Collection.findById(req.params.id);
    if(!collection) {
        res.status(404);
        throw new Error("Collection not found");
    }

    if(collection.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User no permission")
    }

    const updateCollection = await Collection.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
    );
    res.status(200).json(updateCollection);
});

//@desc Update new Collections
//@route Put /api/{users}/collection/:collection_id
//@access private
const addBook = asyncHandler(async (req, res) =>{
    const collection = await Collection.findById(req.params.id);
    if(!collection) {
        res.status(404);
        throw new Error("Collection not found");
    }

    if(collection.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User no permission")
    }

    const collectionBook = collection.books
    collectionBook.push(req.body.id)
    const updateBook = await Collection.findByIdAndUpdate(
        req.params.id,
        {books : collectionBook},
        { new: true } 
    );
    res.status(200).json(updateBook);
});





//@desc Delete new Collections
//@route Delete /api/{users}/collection/:collection_id
//@access private
const deleteCollection = asyncHandler(async (req, res) =>{
    const collection = await Collection.findById(req.params.id);
    if(!collection) {
        res.status(404);
        throw new Error("collectio n not found");
    }
    await Collection.findByIdAndRemove(req.params.id);
    res.status(200).json(collection);
});


module.exports = {getCollections    , createCollection, getCollection, updateNameCollection, addBook, deleteCollection};