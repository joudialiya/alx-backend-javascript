const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('SUM', () => {
  it('1' , () => {
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
  });
  it('2' , () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('3' , () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
});

describe('SUBTRACT', () => {
  it('1' , () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('2' , () => {
    expect(calculateNumber('SUBTRACT', 6, 3.7)).to.equal(2);
  });
  it('3' , () => {
    expect(calculateNumber('SUBTRACT', 3, 3)).to.equal(0);
  });
});

describe('DIVIDE', () => {
  it('1' , () => {
    expect(calculateNumber('DIVIDE', -4, 1.2)).to.equal(-4);
  });
  it('2' , () => {
    expect(calculateNumber('DIVIDE', 6, 1.6)).to.equal(3);
  });
  it('3' , () => {
    expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
  });
});
