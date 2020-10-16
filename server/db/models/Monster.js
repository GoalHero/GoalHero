const Sequelize = require('sequelize');
const db = require('../db');

const Monster = db.define('Monster', {
  name: {
    type: Sequelize.STRING,
  },
  health: {
    type: Sequelize.INTEGER,
  },
  damage: {
    type: Sequelize.INTEGER,
  },
  range: {
    type: Sequelize.INTEGER,
    defaultValue: 75,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
});

module.exports = Monster;
