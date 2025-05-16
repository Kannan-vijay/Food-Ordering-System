const express = require("express");
const {addUsers} = require ("../controllers/userController")

const router = express.Router();
//Login Route
router.post("/addusers", addUsers);


module.exports = router;