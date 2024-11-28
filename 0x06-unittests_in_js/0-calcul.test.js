const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumberr', () => {
  it('1' , () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('2' , () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('3' , () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
});
