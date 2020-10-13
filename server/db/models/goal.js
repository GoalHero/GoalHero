const Sequelize = require('sequelize')
const db = require('../db')

const Goal = db.define('goal', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Goal
