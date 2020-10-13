const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('character', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'https://images.heb.com/is/image/HEBGrocery/001199858'
  }
})

module.exports = Character
