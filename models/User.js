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
    },
    toughts:[
        {
            type:Schema.Types.ObjectId,
            ref:'Tought'
        }
    ]

},
{
    toJSON:{
        virtuals: true
    },
    id: false
});

//get total count of toughts
UserSchema.virtual('toughtsCount').get(function(){
    return this.toughts.length;
})

const User = model('User', UserSchema);

module.exports = User;