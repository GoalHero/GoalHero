const {expect} = require('chai');
const {User} = require('../server/db/models/User')

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
    }