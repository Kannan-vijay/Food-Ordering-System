const express = require("express");
const { getFoodDetails } = require("../controllers/foodController");

const router = express.Router();
//Food Route
router.get("/fooddata", getFoodDetails);


module.exports = router;