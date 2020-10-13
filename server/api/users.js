const router = require('express').Router()
const { User, Character, Goal } = require('../db/models')
const adminOnly = require('./utils/adminOnly')

// Gets all users with their id, email
router.get('/', async (req, res, next) => {
  try {
    // Security
    // if (!req.user.isAdmin) {
    //   const error = new Error("Only admin can see all users")
    //   error.status = 401
    //   throw error
    // }

    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// User signup, posts to /api/users
// No security needed, any one can create a new user
router.post('/', async (req, res, next) => {
  try {
    const {email, password} = req.body
    const currentUser = await User.findOne({
      where: {
        email
      }
    })
    if (currentUser) {
      return res.sendStatus(400)
    }
    const newUser = await User.create({
      email,
      password
    })
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

// Gets user and char info from id
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        // Security: Only see their own user info
        id: req.params.userId,
        // id: req.user.id
      },
      attributes: ['email'],
      include: [
        Character,
        Goal
      ]
    })
    if (user) {
      res.json(user)
    } else {
      res.sendStatus(400)
    }
  } catch (err) {
    next(err)
  }
})

// User deletion
// Security: only admin can delete
router.delete('/:userId', adminOnly, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

module.exports = router
