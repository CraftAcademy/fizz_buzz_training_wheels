function FizzBuzz() {

    const hasZeroReminder = (number, divider) => {
        return (number % divider) === 0;
    }

    this.check = (number) => {
        if (hasZeroReminder(number, 15)) {
            return 'fizz-buzz';
        } else if (hasZeroReminder(number, 5)) {
            return 'buzz';
        } else if (hasZeroReminder(number, 3)) {
            return 'fizz';
        } else {
            return number;
        }
    }
}