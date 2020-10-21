const {expect} = require('chai');
const {Monster} = require('../server/db/models/Monster')
const {User} = require('../server/db/models/User')
const {Goal} = require('../server/api/goals')


describe('Monster model', () => {
    beforeEach(() => db.sync({force: true}))
  
    describe('column definitions and validations', () => {
      it('has a `health`, `name`, `damage`, `range', `imageUrl`, async () => {
        const monster = await Monster.create({
          name: 'Brandon',
          health: '100',
          damage: '10', 
          range: '75', 
          imageUrl: 'monster.png'
        })
  
        expect(monster.name).to.equal('Brandon')
        expect(monster.health).to.equal(100)
        expect(monster.damage).to.equal(100)
      })
  
      it('`range` has a default value of 75', async () => {
        const monster = await Monster.create({name: 'Brandon'})
        expect(monster.range).to.equal(75)
      }) 
    })})


describe('User model', () => {
    beforeEach(() => db.sync({force: true}))
  
    describe('column definitions and validations', () => {
      it('has a `email`, `name`, and `level`, `health', `damage`, `password`, `salt`, async () => {
        const user = await User.create({
          name: 'Cody',
          email: 'Cody@email.com',
          password: '123', 
          level: '1'
        })
  
        expect(user.name).to.equal('Cody')
        expect(user.email).to.equal(7)
        expect(user.password).to.equal('123')
      })
  
      it('`name` is required', () => {
        const user = User.build()
        return user.validate()
          .then(
            () => {
              throw new Error('Validation should have failed!')
            },
            (err) => {
              expect(err).to.be.an('error')
            }
          )
      })
  
      it('`level` has a default value of 1', async () => {
        const user = await User.create({name: 'Cody'})
        expect(user.level).to.equal(1)
      }) 
    })})

    describe('Routes', () => {
      beforeEach(async () => {
        [Goal] = await seed()
      })
    
      describe('/goals', () => {
        describe('GET /goals', () => {
          it('sends all goals', () => {
            return agent
              .get('/api/goals')
              .expect(200)
              .then((res) => {
                expect(res.body).to.be.an('array')
                expect(res.body.some(goal => goal.name === 'eat a grape')).to.equal(true)
                expect(res.body.some(goal => goal.name === 'run a mile')).to.equal(true)
                expect(res.body.some(goal => goal.name === 'wake up early')).to.equal(true)
              })
          })
        })
    
        describe('DELETE /goals/:goalId', async () => {
          it('removes a goal from the database', async () => {
            await agent
              .delete(`/api/goal/${goal.id}`)
              .expect(204)
    
            const isGoalStillThere = await Goal.findByPk(goal.id)
            expect(isGoalStillThere).to.equal(null)
          })
    
          it('sends a 200 if removed', () => {
            return agent
              .delete(`/api/goals/20`)
              .expect(404)
          })
        })
      })
    })
    
    