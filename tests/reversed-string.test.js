const revStr = require('../javascript/reversed-string');

describe('Reversed String Function', ()=>{
    test('input is reversed', () => {
        expect(revStr('hello')).toBe('olleh');
    });
    
    test('input is not empty', () => {
        expect(revStr('')).toBe('String can\'t be blank');
    });
});

