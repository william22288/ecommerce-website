const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/ecommerceweb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(cors());

const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String, 
    price: Number,
    image: String
})

const Product = mongoose.model('Product', productSchema);

// to seed initial data into database
const seedDatabase = async () => {
    try {
        await Product.deleteMany(); // clear existing data

        const products = [
            {
                name: 'iPhone 12',
                type: 'Phone',
                description: 'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc. It is the fourteenth generation, lower-priced iPhone, succeeding the iPhone 11.',
                price: 799,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343704000'
            },
            {
                name: 'MacBook Pro',
                type: 'Laptop',
                description: 'The MacBook Pro is a line of Macintosh portable computers introduced in January 2006, by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is sold with 13- and 16-inch screens.',
                price: 1299,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000'
            },
            {
                name: 'Apple Watch',
                type: 'Watch',
                description: 'Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services.',
                price: 399,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alum-blue-sport-nc-6s?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599815427000'
            },
            {
                name: 'AirPods',
                type: 'Earbuds',
                description: 'AirPods are wireless Bluetooth earbuds created by Apple. They were first released on December 13, 2016, with a 2nd generation released in 2019 and the premium AirPods Pro released later the same year.',
                price: 199,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000'
            },
            {
                name: 'iPad Pro',
                type: 'Tablet',
                description: 'The iPad Pro is a line of iPad tablet computers designed, developed, and marketed by Apple Inc. The first iPad Pro was introduced on September 9, 2015, followed by the first iPad Pro with a 9.7-inch screen on March 21, 2016.',
                price: 799,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1617126638000'
            }
        ];

        await Product.insertMany(products); // insert new data
        console.log('Database seeded successfully');
    } catch (error) {
        console.log('Error seeding database', error);
    }
};

// seed the database on server start
seedDatabase();

// API endpoint defined to fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});