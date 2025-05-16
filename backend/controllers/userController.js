const User = require("../models/User")
const bcrypt = require("bcrypt");

exports.addUsers = async (req,res) => {
    const user = {
            "name" : "kannan",
            "password" : "kannan@2005",
            "email" : "kannan@gmail.com",
            "location" : "thiruppachethi"
        };
    try {
        const results = await User.insertOne(user);
        res.status(201).json(results);
    } catch (error) {
        console.error("Error adding users:", error);
        res.status(400).json({ error: error.message });
    }
    
}