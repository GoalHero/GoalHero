'use strict';

const db = require('./db');
const { User, Monster, Goal, Hero } = require('./db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({
      name: 'cody',
      email: 'Cody@email.com',
      password: '123',
    }),
    User.create({
      name: 'murphy',
      email: 'murphy@email.com',
      password: '123',
    }),
    User.create({
      name: 'eric',
      email: 'ericdag@sina.com',
      password: '123',
    }),
  ]);

  const goals = await Promise.all([
    Goal.create({
      name: 'goal1',
    }),
    Goal.create({
      name: 'goal2',
    }),
    Goal.create({
      name: 'goal3',
    }),
  ]);

  const heroes = await Promise.all([
    Hero.create({
      heroNum: 1,
      name: 'Knight',
      damage: 1,
      range: 75, 
      imageUrl: 'knight',
    }),
    Hero.create({
      heroNum: 2,
      name: 'Barbarian',
      damage: 3,
      range: 75, 
      imageUrl: 'barbarian',
    }),
    Hero.create({
      heroNum: 5,
      name: 'Viking',
      damage: 5,
      range: 75, 
      imageUrl: 'viking',
    }),
    Hero.create({
      heroNum: 3,
      name: 'Archer',
      damage: 4,
      range: 140, 
      imageUrl: 'archer',
    }),
    Hero.create({
      heroNum: 4,
      name: 'Druid',
      damage: 13,
      range: 100, 
      imageUrl: 'druid',
    }),
    Hero.create({
      heroNum: 6,
      name: 'Elf',
      damage: 5,
      range: 135, 
      imageUrl: 'elf',
    }),
    Hero.create({
      heroNum: 7,
      name: 'Dark Elf',
      damage: 19,
      range: 75, 
      imageUrl: 'darkelf',
    }),
    Hero.create({
      heroNum: 8,
      name: 'Ninja',
      damage: 20,
      range: 80, 
      imageUrl: 'ninja',
    }),
    Hero.create({
      heroNum: 9,
      name: 'Wizard',
      damage: 10,
      range: 100, 
      imageUrl: 'wizard',
    }),
    Hero.create({
      heroNum: 10,
      name: 'Elemental',
      damage: 30,
      range: 100, 
      imageUrl: 'elemental',
    }),
  ]);

  const [hero1] = heroes;
  const [robot, bigbird, elmo] = users;
  const [rr, bl, el] = goals;

  // console.log(rr.__proto__)
  await rr.setUser(robot);
  await bl.setUser(robot);
  await robot.addHero(hero1);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
