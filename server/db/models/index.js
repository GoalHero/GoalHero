const User = require('./user')
const Goal = require('./goal')
const Character = require('./character')
const Monster = require('./monster')
const db = require('../db')
// const {Sequelize} = require('sequelize/types')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// User.hasMany(Cart)
// Cart.belongsTo(User)

// Cart.belongsToMany(Cheese, {through: 'CheeseCarts'})
// Cheese.belongsToMany(Cart, {through: 'CheeseCarts'})
// Cheese.belongsToMany(CheeseCart, {through: 'Cc'})
// CheeseCart.belongsToMany(Cheese, {through: 'Cc'})

module.exports = {
  User,
  Goal,
  Character,
  Monster
}
