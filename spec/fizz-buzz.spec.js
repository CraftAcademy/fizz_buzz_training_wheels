const { FizzBuzz } = require('./spec.helper')

describe('Fizz Buzz', () =>{

    let fizzBuzz = new FizzBuzz

    it('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('returns "fizz" if number is divisable by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('fizz')
    })

    it('returns "buzz" if number is divisable by 5', () => {
        expect(fizzBuzz.check(5)).to.eql('buzz')
    })

    it('returns "fizz-buzz" if number is divisable by 15', () => {
        expect(fizzBuzz.check(15)).to.eql('fizz-buzz')
    })

})