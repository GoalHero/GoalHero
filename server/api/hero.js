const router = require('express').Router();
const { Hero, User, UserHeroes } = require('../db/models');
const adminOnly = require('./utils/adminOnly');
const Sequelize = require('sequelize');

// Gets all heroes with their id, email, and username
router.get('/', async (req, res, next) => {
  try {
    //Securtity part
    // if (!req.user.isAdmin) {
    //   const error = new Error("Only admin can see all users")
    //   error.status = 401
    //   throw error
    // }
    // above is security part

    const heroes = await Hero.findAll({
      attributes: [
        'id',
        'name',
        'health',
        'damage',
        'range',
        'imageUrl',
        'heroNum',
      ],
      order: [['heroNum', 'ASC']],
    });
    console.log('these are the heroes', heroes);
    res.json(heroes);
  } catch (err) {
    next(err);
  }
});

// User signup, posts to /api/users
//No security needed, any one can create a new user
router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const currentUser = await User.findOne({
      where: {
        email: req.user.email,
      },
    });
    if (currentUser) {
      return res.sendStatus(400);
    }
    const newUser = await User.create({
      email,
      password,
    });
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

router.get('/userHero', async (req, res, next) => {
  // Gets user info and append to hero

  try {
    const userHero = await UserHeroes.findOne({
      where: {
        UserId: req.user.id,
        current: true,
      },
    });
    const hero = await Hero.findOne({
      where: {
        id: userHero.HeroId,
      },
      attributes: [
        'id',
        'heroNum',
        'name',
        'health',
        'damage',
        'range',
        'imageUrl',
      ],
    });
    if (hero) {
      res.json(hero);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
});
//set select hero
router.put('/userHero', async (req, res, next) => {
  try {
    const currentHero = await UserHeroes.findOne({
      where: {
        UserId: req.user.id,
        current: true,
      },
    });
    const [num, updatedHero] = await UserHeroes.update(
      {
        current: true,
      },
      {
        where: {
          UserId: req.user.id,
          HeroId: req.body.id,
        },
        returning: true,
        plain: true,
      }
    );
    await UserHeroes.update(
      {
        current: false,
      },
      {
        where: {
          UserId: req.user.id,
          HeroId: currentHero.HeroId,
        },
      }
    );
    const hero = await Hero.findOne({
      where: {
        id: updatedHero.HeroId,
      },
      attributes: [
        'id',
        'heroNum',
        'name',
        'health',
        'damage',
        'range',
        'imageUrl',
      ],
    });
    if (hero) {
      res.json(hero);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
});

router.get('/unlockedHeroes', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: Hero,
        },
      ],
    });
    const unlockedHeroesNames = [];
    user.Heros.map((hero) => {
      unlockedHeroesNames.push(hero.name);
    });
    res.send(unlockedHeroesNames);
  } catch (err) {
    next(err);
  }
});

router.post('/unlockNewHeroes', async (req, res, next) => {
  try {
    //  console.log('HEREeeeeeee')
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      // include: [
      //   {
      //     model: Hero,
      //   },
      // ],
    });
    let whichUnlockedHeroId;
    if (user.killTimes + 1 <= 100) {
      whichUnlockedHeroId = user.killTimes + 1;
      const hero = await Hero.findOne({
        where: {
          heroNum: whichUnlockedHeroId,
        },
      });
      await user.addHero(hero);
      res.send('unlockedNewHeroes');
    } else res.sendStatus(433);
  } catch (err) {
    next(err);
  }
});

// User deletion (still needs security for admin only)
//Security: only admin can delete
router.delete('/:heroId', adminOnly, async (req, res, next) => {
  try {
    // if (!req.user.isAdmin) {
    //   const error = new Error("Only admin can delete user")
    //   error.status = 401
    //   throw error
    // }

    await Hero.destroy({
      where: {
        id: req.params.heroId,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
