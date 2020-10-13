const User = require('./User')
const Goal = require('./Goal')
const Character = require('./Character')
const Monster = require('./Monster')
const Hero = require('./Hero')
const db = require('../db')

User.hasMany(Goal)
Goal.belongsTo(User)

User.hasOne(Character)
Character.belongsTo(User)

Hero.belongsToMany(Character, {through: 'CharacterHeroes'})
Character.belongsToMany(Hero, {through: 'CharacterHeroes'})

module.exports = {
  User,
  Goal,
  Character,
  Monster,
  Hero
}
