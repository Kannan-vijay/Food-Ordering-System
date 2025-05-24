const FoodCategory = require("../models/FoodCategory");
const FoodItems = require("../models/FoodItems");


exports.getFoodDetails = async (req,res) => {
    try {
        const foodItems = await FoodItems.find();
        const foodCategory = await FoodCategory.find();
        res.status(200).json({ 
            foodItems, 
            foodCategory, 
            success: true 
        });
    } catch (error) {
        console.error("Error adding users:", error);
        res.status(400).json({ error: error.message , success : false , message : "Fetchin Error" });
    }
    
}