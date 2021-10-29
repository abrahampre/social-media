const {Schema, model, Types } = require ('mongoose');

const ReactionSchema = new Schema ({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String
    },
    writtenBy:{
        type: String
    },
    createdAt:{
        type:Date,
        default: Date.now
        // get: createdAtVal
    }
},
{
    toJSON:{
        getters: true
    },
    id:false
 }
);

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
    },
    reactions:[ReactionSchema]
},
{
    toJSON:{
        virtuals:true,
        getters:true
    },
    id:false
}
) 

ToughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});
const Tought = model('Tought', ToughtSchema);
module.exports = Tought;