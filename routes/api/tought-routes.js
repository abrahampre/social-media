const router = require('express').Router();
const { createTought, removeTought, getToughts } = require('../../controllers/tought-controller')


router.route('/:userId').post(createTought);
router.route('/').get(getToughts)
router.route('/:toughtId').delete(removeTought);

module.exports= router;