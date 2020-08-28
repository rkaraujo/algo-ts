import { expect } from 'chai';

import { isSquare } from '../../src/cw/isSquare';

// TODO: Replace examples and use TDD development by writing your own tests

describe('solution', () => {
  it('should work for some examples', () => {
    expect(isSquare(-1)).to.be.false;
    expect(isSquare(0)).to.be.true;
    expect(isSquare(3)).to.be.false;
    expect(isSquare(4)).to.be.true;
    expect(isSquare(25)).to.be.true;
    expect(isSquare(26)).to.be.false;
  });
});
