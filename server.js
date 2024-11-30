const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/foodMenu")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Menu Schema and Model
const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

// Define API Routes
// Get all menu items
app.get("/", (req, res) => {
  res.send("Welcome to the Food Menu API!");
});

app.get("/menu", async (req, res) => {
  try {
    const menu = await MenuItem.find(); // Fetch all items from the collection
    res.json(menu);
  } catch (err) {
    res.status(500).send({ message: "Error fetching menu items", error: err });
  }
});

// Add a new menu item
app.post("/menu", async (req, res) => {
  try {
    const newItem = new MenuItem(req.body); // Assume JSON {name, price}
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).send({ message: "Error adding menu item", error: err });
  }
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
