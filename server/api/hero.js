const router = require('express').Router();
const { Hero } = require('../db/models');
const adminOnly = require('./utils/adminOnly');

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
      attributes: ['name', 'health', 'damage', 'range', 'imageUrl'],
    });
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

// Gets user info from email, including
router.get('/me', async (req, res, next) => {
  try {
    const hero = await Hero.findOne({
      where: {
        //securtity: only see himself's user info
        id: req.user.id,
      },
      attributes: ['name', 'health', 'damage', 'range', 'imageUrl'],
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

// User checkout info, changes to api/users/userId
// router.put('/:userId', async (req, res, next) => {
//   try {
//     const {address, phoneNumber, firstName, lastName} = req.body
//     const [numberofUpdated, updatedUser] = await User.update(
//       {
//         address,
//         phoneNumber,
//         firstName,
//         lastName
//       },
//       {
//         where: {
//           //security: only change himself's user info
//           //  id: req.params.userId,
//           id: req.user.id
//         },
//         returning: true,
//         plain: true
//       }
//     )
//     res.json(updatedUser)
//   } catch (err) {
//     next(err)
//   }
// })

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
