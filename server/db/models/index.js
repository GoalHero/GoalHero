const User = require('./User');
const Goal = require('./Goal');
// const Character = require('./Character')
const Monster = require('./Monster');
const Hero = require('./Hero');
const db = require('../db');

User.hasMany(Goal);
Goal.belongsTo(User);

User.belongsToMany(Hero, { through: 'UserHeroes' });
Hero.belongsToMany(User, { through: 'UserHeroes' });

module.exports = {
  User,
  Goal,
  Monster,
  Hero,
};
