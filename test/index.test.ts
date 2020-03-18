import { should } from 'chai';

should();

describe('True should be true', () => {
    it('is true', () => {
        const value = true;
        value.should.equal(true);
    });
    it('false is not true', () => {
        const value = false;
        value.should.not.equal(true);
    });
});
