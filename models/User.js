const {Schema, model } = require ('mongoose');

const UserSchema = new Schema ({

    userName:{
        type: String,
        unique: true,
        required: true,
        trim: true
        
    },
    email:{
        type: String,
        unique: true,
        required: true
        //add valid email validation
    }

})

const User = model('User', UserSchema);

module.export = User;