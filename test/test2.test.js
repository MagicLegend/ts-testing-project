const chai = require('chai');

chai.should();

describe('False should be false', () => {
    it('is false', () => {
        const value = false;
        value.should.equal(false);
    });
});
