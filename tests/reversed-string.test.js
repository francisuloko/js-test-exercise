const revStr = require('../javascript/reversed-string');

test('Expect string to be reversed', () => {
    expect(revStr('hello')).toBe('olleh');
});

test('Expect string to be reversed', () => {
    expect(revStr('')).toBe('String can\'t be blank');
});
