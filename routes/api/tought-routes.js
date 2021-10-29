
const router = require('express').Router();
const { 
    createTought,
    removeTought, 
    getToughts, 
    addReaction, 
    removeReaction, 
    updateTought 
    } = require('../../controllers/tought-controller')


router.route('/').get(getToughts)

router.route('/:userId')
      .post(createTought)
    
router
.route('/:toughtId')
.put(updateTought)

router
.route('reaction/:toughtId')
.put(addReaction)

router
.route('/:toughtId/:reactionId')
.delete(removeReaction);




router.route('/:toughtId').delete(removeTought);

// router.route('/:toughtId').put(createReaction, updateTought)
// router.route('/:toughtId/:reactionId').put(createReaction)

module.exports= router;