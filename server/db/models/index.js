const User = require('./User')
const Goal = require('./Goal')
// const Character = require('./Character')
const Monster = require('./Monster')
const Hero = require('./Hero')
const db = require('../db')

User.hasMany(Goal)
Goal.belongsTo(User)

// User.hasOne(Character)
// Character.belongsTo(User)

Hero.belongsToMany(User, {through: 'UserHeroes'})
User.belongsToMany(Hero, {through: 'UserHeroes'})

module.exports = {
  User,
  Goal,
  Monster,
  Hero
}
