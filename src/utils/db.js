const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    const DB = process.env.DATABASE_URL;

    try {
        await mongoose.connect(DB, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Connection successful");
    } catch (error) {
        console.error("Database connection error:", error);
        console.log("Connection failed");
    }
}

module.exports = connectDb;
