const asyncHandler = require("express-async-handler");
const Report = require("../models/reportModel");


//@desc Get all Collections
//@route GET /api/{users}/collection
//@access private
const getReports = asyncHandler(async (req, res) =>{
    const reports = await Report.find();
    res.status(400).json(reports);
});


const createReport = asyncHandler(async (req, res) =>{
    console.log("new request is ", req.body);
    const {typeOfReport, subject, details} = req.body;
    if(!typeOfReport || !subject){
        res.status(400);
        throw new Error("please send Subject");
    }
    const report = await Report.create({
        typeOfReport, 
        subject, 
        details,
        user_id: req.user.id
    });
    res.status(201).json(report);
});

module.exports = {getReports, createReport}