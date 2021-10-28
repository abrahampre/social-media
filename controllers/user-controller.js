const {User} = require ('../models');

const userController = {
    
    // get all users
    getAllUser(req, res){
        User.find({})
       
        .then(dbUserData => res.json (dbUserData))
        .catch(err=>{
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get one pizza by id 

    getUserById({params},res){
        User.findOne({_id: params.id})
        
        .then(dbUserData =>{
            if(!dbUserData){
                res.status(400).json({message:'User not found!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err=>{
            console.log(err);
            res.status(400).json(err);
        });
    },
    createUser({body},res){
        User.create(body)
        .then(dbUserData =>res.json(dbUserData))
        .catch(err=>res.status(400).json(err));
    },

    // update User

    updateUser({params, body},res){
        User.findOneAndUpdate (params.userId,  body, {new:true})
        .then(dbUserData =>{
            if(!dbUserData){
                res.status(400).json({message:'no user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
    },

    // delete user

    deleteUser({params},res){
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData =>{
             if(!dbUserData){
                 res.status(404).json({message:'User not found with this id!'});
                 return;
             }
             res.json(dbUserData)
        })
        .catch(err=> res.status(400).json(err));
    }

};
module.exports = userController;