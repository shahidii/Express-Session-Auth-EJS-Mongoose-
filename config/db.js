const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        // Attempt to connect to MongoDB Atlas
        await mongoose.connect(process.env.MONGO_URI_ATLAS);
        console.warn("Database connected successfully to MongoDB Atlas!");
    } catch (error) {
        console.error("MongoDB Atlas connection failed:", error.message);

        try {
            // Fallback to local MongoDB connection if Atlas fails
            await mongoose.connect(process.env.MONGO_URI_LOCAL);
            console.warn("Connected to local MongoDB!");
        } catch (localError) {
            console.error("Local MongoDB connection failed:", localError.message);
            process.exit(1); // Exit the process with failure
        }
    }
};

module.exports = connectDB;
