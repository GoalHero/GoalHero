const Sequelize = require('sequelize')
const db = require('../db')

const Hero = db.define('Hero', {
  name: {
   type: Sequelize.STRING,
   defaultValue: "Knight"
  },
  health: {
    type: Sequelize.INTEGER
  },
  damage: {
    type: Sequelize.INTEGER
  },
  range: {
    type: Sequelize.INTEGER,
    defaultValue: 75
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Hero
