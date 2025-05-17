const express = require("express");
const {addUsers, loginUser} = require ("../controllers/userController")

const router = express.Router();
//Login Route
router.post("/adduser", addUsers);
router.post("/login", loginUser);


module.exports = router;