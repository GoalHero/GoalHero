const Sequelize = require('sequelize');
const db = require('../db');

const Goal = db.define('Goal', {
  name: {
    type: Sequelize.STRING,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Goal;
