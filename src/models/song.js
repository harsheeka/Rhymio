const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({ 
    title:{
        type:String,
        required:true
    },
    artist:{
        type: String,
        required: true,
    },
    album: {
        type: String,
    },
    duration: {
        type: Number, // Duration in seconds
        required: true,
    },
    url:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Song', songSchema);