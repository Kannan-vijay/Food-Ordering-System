const mongoose = require("mongoose");


const foodItemsSchema = new mongoose.Schema({
    CategoryName : String,
    name : String,
    img : String,
    options : [{type : Object}],
    description : String
});

module.exports = mongoose.model("FoodItems",foodItemsSchema);