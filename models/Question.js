const mongoose = require(`mongoose`);

const queSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Enter valid email']
    },
    topic:{
        type:String,
        required:[true,'Enter valid topic']
    },
    link:{
        type:String,
        required:[true,'Enter valid link of question']
    },
    title:{
        type:String,
        required:[true,'Enter question title']
    },
    difficulty:{
        type:String,
        enum:['Hard','Medium','Easy']
    }
})

module.exports = mongoose.model('User',queSchema); 