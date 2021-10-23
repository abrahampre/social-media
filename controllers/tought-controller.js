const {Tought, User} = require('../models');

const toughtsController = {
    // add tought 
    addTought({params, body}, res){
        console.log(body);
        Tought.create(body)
        .then(({ _id })=>{
            return User.findOneAndUpdate(
                { _id: params.userId},
                { $push: { toughts: _id} },
                { new: true} );
        })
        .then (dbUserData =>{
            if(!dbUserData){
                res.status(404).json({message: 'No user found with this id'});
            }
            res.json(dbUserData)
        })
        .catch(err=> res.json(err))
    },
    removeTought({params}, res){
        Tought.findOneAndDelete({_id: params.toughtId})
        .then (deletedTought =>{
            if(!deletedTought){
                return res.status(404).json({message:'No Tought with this id!'})
            }
            return User.findOneAndUpdate({_id:params.userId},{$pull:{tought: params.toughtId}},{new:true});
        })
        .then (dbUserData =>{
            if(!dbUserData){
                res.status(404).json({message:'No User found with this ID!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    
};

module.exports = toughtsController