const { expect } = require('chai');
const sinon = require('sinon');
const app = require('../server/app');
const agent = supertest.agent(app);
const seed = require('./test-seed');
const { Goal } = require('../server/api/goals');

describe('Routes', () => {
  beforeEach(async () => {
    [Goal] = await seed();
  });

  describe('/goals', () => {
    describe('GET /goals', () => {
      it('sends all goals', () => {
        return agent
          .get('/api/goals')
          .expect(200)
          .then((res) => {
            expect(res.body).to.be.an('array');
            expect(
              res.body.some((goal) => goal.name === 'eat a grape')
            ).to.equal(true);
            expect(
              res.body.some((goal) => goal.name === 'run a mile')
            ).to.equal(true);
            expect(
              res.body.some((goal) => goal.name === 'wake up early')
            ).to.equal(true);
          });
      });
    });

    describe('DELETE /goals/:goalId', async () => {
      it('removes a goal from the database', async () => {
        await agent.delete(`/api/goal/${goal.id}`).expect(204);

        const isGoalStillThere = await Goal.findByPk(goal.id);
        expect(isGoalStillThere).to.equal(null);
      });

      it('sends a 200 if removed', () => {
        return agent.delete(`/api/goals/20`).expect(404);
      });
    });
  });
});
