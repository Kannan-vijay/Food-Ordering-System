const User = require("../models/User")
const bcrypt = require("bcrypt");

exports.addUsers = async (req,res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
            "name" : req.body.name,
            "password" : hashedPassword,
            "email" : req.body.email,
            "location" : req.body.location
        };
    try {
        const duplicatedata = await User.findOne({email : user.email});
        if(duplicatedata){
            return res.status(401).json({success : false , message :"User Already exists"});
        }
        const results = await User.insertOne(user);
        res.status(201).json({results,sucess : true});
    } catch (error) {
        console.error("Error adding users:", error);
        res.status(400).json({ error: error.message , success : false , message : "Error Adding user" });
    }
    
}

exports.loginUser = async (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userData = await User.findOne({email});
        if(!userData){
            return res.status(401).json({
                sucess : false,
                message : "No User Found"
            });
        }
        const checkPassword = await bcrypt.compare(password,userData.password);
        if(!checkPassword){
            return res.status(400).json({
                sucess : false,
                message : "Password is Incorrect"
            });
        }
        return res.status(200).json({
            sucess : true
        });
    } catch (error) {
        res.status(400).json({
            error : error.message
        })
    }
}