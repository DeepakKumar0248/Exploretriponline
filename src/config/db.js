const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/ecom`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error", error);
    }
};

module.exports = connectDb;
