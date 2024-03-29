const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const express = require('express');
const app = express()


//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) =>{
    const contacts = await Contact.find();
    res.status(400).json(contacts);
});

//@desc Create new contacts
//@route Post /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) =>{
    console.log("new request is ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
});

//@desc Get contacts
//@route Get /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(401).json(contact);
});

//@desc Update new contacts
//@route Put /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User no permission")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
    );

    res.status(200).json(updateContact);
});

//@desc Delete new contacts
//@route Delete /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("contact not found");
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact);
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};