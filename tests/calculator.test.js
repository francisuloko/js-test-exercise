const Calculator = require('../javascript/calculator');

describe('Calculator Class', () => {
    const calc = new Calculator();
    describe('add method', () => {
        test('add 1 and 2 to equal 3', () => {
            expect(calc.add(1,2)).toBe(3);
        });

        test('add number with zero or null to return number', () => {
            expect(calc.add(1, 0)).toBe(1);
        });

        test('add emtpy string or null to be invalid', () => {
            expect(calc.add('')).toBe('Enter valid input');
        });
    });

    describe('subtract method', () => {
        test('subtract 2 from 3 to equal 1', () => {
            expect(calc.subtract(3,2)).toBe(1);
        });

        test('subtract 2 from 0 to equal -2', () => {
            expect(calc.subtract(0,2)).toBe(-2);
        });

        test('subtract null form 1 to be invalid', () => {
            expect(calc.subtract(1)).toBe('Enter valid input');
        });
    });

    describe('divide method', () => {
        test('divide 4 by 2 to equal 2', () => {
            expect(calc.divide(4,2)).toBe(2);
        });

        test('zero division to equal infinity', () => {
            expect(calc.divide(1,0)).toBe('infinity');
        });

        test('divide null by 1 to be equal to 0', () => {
            expect(calc.divide(0,1)).toBe(0);
        });

        test('divide string with number to be invalid', () => {
            expect(calc.divide("2",1)).toBe('Enter valid input');
        });
    });

    describe('mulitiply method', () => {
        test('mulitiply 2 by 2 to equal 4', () => {
            expect(calc.mulitiply(2,2)).toBe(4);
        });

        test('multiply 1 and null to 0', () => {
            expect(calc.mulitiply(1, 0)).toBe(0);
        });

        test('multiply number with string equal invalid', () => {
            expect(calc.mulitiply(1, "a")).toBe('Enter valid input');
        });        
    });
});
