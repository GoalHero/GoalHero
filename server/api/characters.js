const router = require('express').Router()
const { Character } = require('../db/models')
const adminOnly = require('./utils/adminOnly')

// Gets all characters
router.get('/', async (req, res, next) => {
  try {
    const characters = await Character.findAll({})
    res.json(characters)
  } catch (err) {
    next(err)
  }
})

module.exports = router
