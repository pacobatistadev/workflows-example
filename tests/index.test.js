doStuff = require('../src/index')

describe('test stuff', () => {

  it('do stuff', () => {
    const input = 'check github actions'
    const output = doStuff(input)
    const expected = 'Stuff to do is check github actions'

    expect(expected).toBe(output)
  })

})