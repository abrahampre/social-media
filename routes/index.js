const router = require('express').Router();
//import all of the API rotues from /api//index.js (no need for index.js since its implied)
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;