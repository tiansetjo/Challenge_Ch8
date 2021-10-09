const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        require : true,

    },
    email :{

        type : String,
        require : true
    },

    experience :{
        type : String,
        require: true
    },

    level :{
        type : String,
        require: true
    }


})

module.exports = mongoose.model('Posts', postSchema)