const { FizzBuzz } = require('./spec.helper')


describe('Fizz Buzz', () => {
    let fizzBuzz

    beforeEach(() => {
        fizzBuzz = new FizzBuzz
    });

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

    describe('check()', () => {
        let fizzBuzz

        beforeEach(() => {
            fizzBuzz = new FizzBuzz
        });
        let tests = [
            { number: 1, expected: 1 },
            { number: 5, expected: 'buzz' },
            { number: 3, expected: 'fizz' },
            { number: 15, expected: 'fizz-buzz' }
        ];

        tests.forEach((test) => {
            it(`responds with ${test.expected} when number is divisible with ${test.number}`, () => {
                expect(fizzBuzz.check(test.number)).to.eql(test.expected)
            });
        });
    });


})