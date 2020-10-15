// const router = require('express').Router()
// const { Hero } = require('../db/models')

// // Gets all heroes
// router.get('/', async (req, res, next) => {
//   try {
//     const heroes = await Hero.findAll({})
//     res.json(heroes)
//   } catch (err) {
//     next(err)
//   }
// })

// // Gets single hero
// router.get('/:heroId', async (req, res, next) => {
//   try {
//     const hero = await Hero.findByPk(req.params.heroId)
//     res.json(hero)
//   } catch (err) {
//     next(err)
//   }
// })

// module.exports = router
