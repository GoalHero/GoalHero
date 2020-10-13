const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('Character', {
  level: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  health: {
    type: Sequelize.INTEGER,
    defaultValue: 100
  },
  damage: {
    type: Sequelize.INTEGER,
    defaultValue: 10
  }
})

module.exports = Character
