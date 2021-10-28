const {Tought, User} = require('../models');

const toughtsController = {
    // add tought 
    // working with (req,res)
    createTought({ params, body }, res){
      console.log(params.userId)
        console.log(body);
        Tought.create(body)
          .then(dbToughtData => {
            // res.json(dbToughtData);
            return User.findOneAndUpdate(
              {_id: params.userId} ,
              { $push: { toughts: dbToughtData._id } },
              { new: true }
            );

          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No Toughts found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err =>{
            res.json(err);
          } )
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
        .catch(err=>{
          console.log(err);
          res.status(400).json(err)
        })
    },
    getToughts(req,res){
      Tought.find({})
      .then(dbToughtData => res.json(dbToughtData))
      .catch(err=>{
        console.log(err);
        res.status(400).json(err)
      })
    }
    
};

module.exports = toughtsController