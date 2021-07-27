const str = require('../javascript/string-length')

describe("String Length Function", () => {
    const validStr  = str('success')
    const longStr = str('Mississippi');
    const emptyStr = str('');

    test('input is 1-10 characters long', () => {
        expect(validStr).toEqual(7);
    });

    test('input is not empty', () => {
        expect(emptyStr).toEqual('String can\'t be blank');
    });

    test('input is not more than 10 characters', () => {
        expect(longStr).toEqual('String is too long');
    });
});
