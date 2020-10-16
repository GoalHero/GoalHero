const router = require('express').Router();
const { Goal, User } = require('../db/models');
const adminOnly = require('./utils/adminOnly');

// Gets all goals
router.get('/', async (req, res, next) => {
  try {
    // Security
    // if (!req.user.isAdmin) {
    //   const error = new Error("Only admin can see all goals")
    //   error.status = 401
    //   throw error
    // }
    const goals = await Goal.findAll({});
    res.json(goals);
  } catch (err) {
    next(err);
  }
});

// Create a new goal
router.post('/users/me', async (req, res, next) => {
  try {
    const userGoals = await Goal.findAll({
      where: {
        UserId: req.user.id,
      },
    });

    const incompleteGoalCount = userGoals.reduce((accumulator, goal) => {
      if (!goal.completed) {
        accumulator++;
      }
      return accumulator;
    }, 0);
    console.log(incompleteGoalCount);
    if (incompleteGoalCount >= 5) {
      return res.sendStatus(400);
    }

    const goal = await Goal.create({
      name: req.body.name,
    });
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    goal.setUser(user);
    res.json(goal);
  } catch (err) {
    next(err);
  }
});

// Delete a goal
router.delete('/:goalId', async (req, res, next) => {
  try {
    await Goal.destroy({
      where: {
        id: req.params.goalId,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// Complete a goal
router.put('/:goalId', async (req, res, next) => {
  try {
    const [numberUpdated, updatedGoal] = await Goal.update(
      {
        completed: true,
        returning: true,
        plain: true,
      },
      {
        where: {
          id: req.params.goalId,
        },
      }
    );
    res.send(updatedGoal);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
