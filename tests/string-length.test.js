const str = require('../javascript/string-length')

describe("String", () => {
    const validStr  = str('success')
    const longStr = str('Mississippi');
    const emptyStr = str('');

    test('is valid', () => {
        expect(validStr).toEqual(7);
    });

    test('is empty', () => {
        expect(emptyStr).toEqual('String can\'t be blank');
    });

    test('is not valid', () => {
        expect(longStr).toEqual('String is too long');
    });
});
