const Sequelize = require('sequelize');
const db = require('../db');

const UserHeroes = db.define('UserHeroes', {
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserHeroes;
