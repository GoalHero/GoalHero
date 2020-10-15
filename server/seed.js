'use strict'

const db = require('./db')
const {User, Monster, Goal} = require('./db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'cody',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      name: 'murphy',
      email: 'murphy@email.com',
      password: '123',
    }),
    User.create({
      name: 'eric',
      email: 'ericdag@sina.com',
      password: '123'
    })
  ])

  const goals = await Promise.all([
    Goal.create({
      name: 'goal1'
    }),
    Goal.create({
      name: 'goal2'
    }),
    Goal.create({
      name: 'goal3'
    })
  ])

  const [robot, bigbird, elmo] = users
  const [rr, bl, el] = goals
  // console.log(rr.__proto__)
  await rr.setUser(robot);
  await bl.setUser(robot);


  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
