const mongoose = require("mongoose");


const foodCategorySchema = new mongoose.Schema({
    CategoryName : String,
});

module.exports = mongoose.model("FoodCategory",foodCategorySchema);