const {expect} = require('chai');
const {Goal} = require('../server/db/models/Goal')

describe('Goal model', () => {
    beforeEach(() => db.sync({force: true}))
  
    describe('column definitions and validations', () => {
      it('has a `completed`, `name`,', async () => {
        const goal = await Goal.create({
          name: 'run',
          completed: 'true',
        })
  
        expect(goal.name).to.equal('run')
        expect(goal.completed).to.equal('true')
      })
  
      it('`completed` is required', () => {
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
  
      it('`name` is equal to a string', async () => {
        const goal = await Goal.create({name: 'Cody'})
        expect(goal.name).to.equal('string')
      }) 
    }