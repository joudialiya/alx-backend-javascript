const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM', () => {
  it('1' , () => {
    assert.equal(calculateNumber('SUM', 1, 1), 2);
  });
  it('2' , () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('3' , () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
});

describe('SUBTRACT', () => {
  it('1' , () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('2' , () => {
    assert.equal(calculateNumber('SUBTRACT', 6, 3.7), 2);
  });
  it('3' , () => {
    assert.equal(calculateNumber('SUBTRACT', 3, 3), 0);
  });
});

describe('DIVIDE', () => {
  it('1' , () => {
    assert.equal(calculateNumber('DIVIDE', -4, 1.2), -4);
  });
  it('2' , () => {
    assert.equal(calculateNumber('DIVIDE', 6, 1.6), 3);
  });
  it('3' , () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 0), 'Error');
  });
});
