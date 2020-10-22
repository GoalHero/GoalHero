const router = require('express').Router();
const User = require('../db/models/User');
const Hero = require('../db/models/Hero');
const UserHeroes = require('../db/models/UserHeroes');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log('No such user found:', req.body.email);
      res.status(401).send('Wrong username and/or password');
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email);
      res.status(401).send('Wrong username and/or password');
    } else {
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const hero = await Hero.findOne({
      where: {
        id: 1,
      },
    });
    await user.addHero(hero);
    req.login(user, (err) => (err ? next(err) : res.json(user)));
    await UserHeroes.update(
      {
        current: true,
      },
      {
        where: { UserId: req.user.id },
        returning: true,
        plain: true,
      }
    );
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      res.send(err);
      next(err);
    }
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  //res.redirect('/')
  res.status(222).send('OK');
});

router.get('/me', (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

router.use('/google', require('./google'));
