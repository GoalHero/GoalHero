const Sequelize = require('sequelize')
const db = require('../db')

const Monster = db.define('monster', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  shippingCost: {
    type: Sequelize.INTEGER
  }
})

module.exports = Monster
