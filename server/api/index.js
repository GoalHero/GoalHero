const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/goals', require('./goals'));
router.use('/hero', require('./hero'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
