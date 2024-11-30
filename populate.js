const mongoose = require('mongoose');

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://admin:admin@cluster0.hef29.mongodb.net/'; // Replace with your username, password, and database name

// Define the connection function
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 30000, // Adjust timeout if needed
        });
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1); // Exit the process if connection fails
    }
};

// Define the Schema and Model
const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

// Seed data into Atlas
const seedMenu = async () => {
    const items = [
        { name: "Samosa", price: 30 },
        { name: "Pizza", price: 99 },
        { name: "Cheese Sandwich", price: 60 },
        { name: "Paneer Sandwich", price: 80 },
        { name: "Mexican Taco", price: 899 },
    ];

    try {
        await MenuItem.deleteMany(); // Clear the collection before inserting
        console.log("Old menu items removed!");
        await MenuItem.insertMany(items); // Insert new items
        console.log("Menu items added successfully!");
    } catch (err) {
        console.error("Error inserting items:", err.message);
    } finally {
        mongoose.connection.close(); // Close the connection after operation
    }
};

// Run the connection and seed functions
const run = async () => {
    await connectDB(); // Connect to the database
    await seedMenu();  // Seed the menu
};

run();
