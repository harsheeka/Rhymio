const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    likedSongs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song' //Reference to the Song model
    }]

}, {timestamps: true,});

module.exports = mongoose.model('User',userSchema); //This exports the User model based on the userSchema defined above.
//The model can be used to interact with the 'users' collection in the MongoDB database.