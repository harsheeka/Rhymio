const mongoose = require("mongoose");
const uri = process.env.MONGO_URI ;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
    }
    catch (error) {
        console.log("could not connect to mongoDB");
        throw error;
    }
};

module.exports = connectDB;