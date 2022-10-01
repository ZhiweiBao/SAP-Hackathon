const mongoose = require('mongoose');

const User = require('../models/user');
const db = require('../db');

// mongoose.connect('mongodb://localhost:27017/yelp-camp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("SAP HACK Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    // await Campground.deleteMany({});
    for (let i = 0; i < 3; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const user = new User({

            email: 'alicesshen@gmail.com',
            firstName: 'alice',
            lastName: 'bear',
            organization: 'SAP',
            location: 'San Francisco',
            totalPoints: 100,
            // location: `${cities[random1000].city}, ${cities[random1000].state}`,
            // title: `${sample(descriptors)} ${sample(places)}`,
            arrayOfBadges: [
                {
                    title: 'SAP Hackathon sample badge',
                    image: 'https://images.unsplash.com/photo-1517436073-7f7c7f9b0f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                }
            ],
            arrayOfEvents: [],
        })
        await user.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})