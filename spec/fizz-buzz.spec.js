const { FizzBuzz } = require('./spec.helper')

describe('Fizz Buzz', () =>{

    it('returns a number if no game rules are met', () => {
        let fizzBuzz = new FizzBuzz
        expect(fizzBuzz.check(1)).to.eql(1)
    })

})