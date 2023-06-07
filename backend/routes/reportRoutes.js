const express = require ("express");
const {getReports, createReport} = require("../controllers/reportController.js");
const validateToken = require("../middleware/validateTokenHandler.js");
const router = express.Router();


router.use(validateToken);
router.route('/').get(getReports).post(createReport);

module.exports = router;
