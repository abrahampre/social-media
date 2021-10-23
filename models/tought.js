const {Schema, model } = require ('mongoose');

const ToughtSchema = new Schema ({

    toughtText:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        max: 240
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    userNameBy:{
        type: String,
        required: true
    }
    // , reactions:{

    // }


}) 

const Tought = model('Tought', ToughtSchema);

module.exports = Tought;