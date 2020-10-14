const router = require('express').Router()
module.exports = router

<<<<<<< HEAD
 router.use('/users', require('./users'))
 router.use('/heroes', require('./heroes'))
// router.use('/cheeses', require('./cheeses'))
// router.use('/cheeseCart', require('./cheeseCart'))
// router.use('/cart', require('./cart'))
=======
router.use('/users', require('./users'))
router.use('/goals', require('./goals'))
router.use('/characters', require('./characters'))
router.use('/heroes', require('./heroes'))
>>>>>>> master

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
