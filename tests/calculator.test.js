const Calculator = require('../javascript/calculator');

describe('Calculator', () => {
    const calc = new Calculator();
    describe('Add', () => {
        test('1 and 2 to equal 3', () => {
            expect(calc.add(1,2)).toBe(3);
        });

        test('zero addition', () => {
            expect(calc.add(1, 0)).toBe(1);
        });

        test('1 and null to null', () => {
            expect(calc.add(1)).toBe('Enter valid input');
        });
    });

    describe('Subtract', () => {
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

    describe('Divide', () => {
        test('divide 4 by 2 to equal 2', () => {
            expect(calc.divide(4,2)).toBe(2);
        });

        test('1 and null to null', () => {
            expect(calc.divide(1,0)).toBe('infinity');
        });

        test('1 and null to null', () => {
            expect(calc.divide(0,1)).toBe(0);
        });

        test('invalid string division', () => {
            expect(calc.divide("2",1)).toBe('Enter valid input');
        });
    });

    describe('Mulitiply', () => {
        test('mulitiply 2 by 2 to equal 4', () => {
            expect(calc.mulitiply(2,2)).toBe(4);
        });

        test('1 and null to null', () => {
            expect(calc.mulitiply(1, 0)).toBe(0);
        });

        test('string multiplication invalid', () => {
            expect(calc.mulitiply(1, "a")).toBe('Enter valid input');
        });        
    });
});
