const Sequelize = require('sequelize');
const db = require('../db');

const Hero = db.define('Hero', {
  heroNum: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    //  defaultValue: "Knight"
  },
  health: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
  },
  damage: {
    type: Sequelize.INTEGER,
    defaultValue: 10,
  },
  range: {
    type: Sequelize.INTEGER,
    defaultValue: 75,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
});

module.exports = Hero;
