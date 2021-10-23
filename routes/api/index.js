const router = require ('express').Router();
const userRoutes = require('./user-routes');
const toughtRoutes = require('./tought-routes');
//add prefix of '/pizzas' to routes created in 'user-routes.js'

// router.use('/toughts', toughtsRoutes);
router.use('/users', userRoutes);
router.use('/toughts', toughtRoutes);

module.exports = router;