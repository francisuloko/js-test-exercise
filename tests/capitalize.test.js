const capitalize = require('../javascript/capitalize');

describe('Capitalize', () => {
    test('change first string to uppercase', ()=>{
      expect(capitalize('alpha')).toBe('Alpha');
    });

    test('empty string is invalid', ()=>{
      expect(capitalize('')).toBe('String can\'t be empty');
    });

    test('input must be string', ()=>{
      expect(capitalize(1)).toBe('Input must be a string');
    });
});
