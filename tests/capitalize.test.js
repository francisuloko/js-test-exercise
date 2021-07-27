const capitalize = require('../javascript/capitalize');

describe('Capitalize Function', () => {
    test('input first character is transformed to uppercase', ()=>{
      expect(capitalize('alpha')).toBe('Alpha');
    });

    test('input is not empty', ()=>{
      expect(capitalize('')).toBe('String can\'t be empty');
    });

    test('input is a string', ()=>{
      expect(capitalize(1)).toBe('Input must be a string');
    });
});
