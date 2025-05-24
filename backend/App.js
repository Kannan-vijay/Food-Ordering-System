const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors=require("cors");
const userRoutes = require("./routes/userRoutes")
const foodRoutes = require("./routes/foodRoutes")


//DB Connection
dotenv.config();
connectDB();

const app = express();

//Data Format Specification
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api Request PerMission
app.use(cors());


// Routes
app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);

const PORT = process.env.PORT || 1806;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));