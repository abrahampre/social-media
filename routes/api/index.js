const router = require ('express').Router();
const userRoutes = require('./user-routes');
const toughtRoutes = require('./tought-routes');


// router.use('/toughts', toughtsRoutes);
router.use('/users', userRoutes);
router.use('/toughts', toughtRoutes);

module.exports = router;