const seedMenu = async () => {
    const items = [
        { name: "Samosa", price: 30 },
        { name: "Pizza", price: 99 },
        { name: "Cheese Sandwich", price: 60 },
        { name: "Paneer Sandwich", price: 80 },
        { name: "Mexican Taco", price: 899 },
    ];

    try {
        await MenuItem.deleteMany();
        await MenuItem.insertMany(items);
        console.log('Menu items seeded!');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding menu:', err);
    }
};

seedMenu();
