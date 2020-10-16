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
      damage: 2,

      imageUrl: '../assets/images/knight.png',
    }),
    Hero.create({
      heroNum: 2,
      name: 'Barbarian',
      damage: 4,

      imageUrl: '../assets/images/barbarian.png',
    }),
    Hero.create({
      heroNum: 3,
      name: 'Archer',
      damage: 6,

      imageUrl: '../assets/images/archer.png',
    }),
    Hero.create({
      heroNum: 4,
      name: 'Druid',
      damage: 8,

      imageUrl: '../assets/images/druid.png',
    }),
    Hero.create({
      heroNum: 5,
      name: 'Viking',
      damage: 10,

      imageUrl: '../assets/images/viking.png',
    }),
    Hero.create({
      heroNum: 6,
      name: 'Elf',
      damage: 12,

      imageUrl: '../assets/images/elf.png',
    }),
    Hero.create({
      heroNum: 7,
      name: 'Dark Elf',
      damage: 14,
      imageUrl: '../assets/images/darkelf.png',
    }),
    Hero.create({
      heroNum: 8,
      name: 'Ninja',
      damage: 16,

      imageUrl: '../assets/images/ninja.png',
    }),
    Hero.create({
      heroNum: 9,
      name: 'Wizard',
      damage: 18,

      imageUrl: '../assets/images/wizard.png',
    }),
    Hero.create({
      heroNum: 10,
      name: 'Elemental',
      damage: 20,

      imageUrl: '../assets/images/elemental.png',
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
