const {expect} = require('chai');
const {Monster} = require('../server/db/models/Monster')


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
    }