const router = require ('express').Router();
const userRoutes = require('./user-routes');
const toughtsRoutes = require('./toughts-routes');
//add prefix of '/pizzas' to routes created in 'user-routes.js'

router.use('/toughts', toughtsRoutes);
router.use('/user', userRoutes);

module.exports = router;