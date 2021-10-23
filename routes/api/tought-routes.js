const router = require('express').Router();
const { addTought, removeTought } = require('../../controllers/tought-controller')


router.route('/:userId').post(addTought);

router.route('/:toughtId').delete(removeTought);

module.exports= router;