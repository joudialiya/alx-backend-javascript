const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('SUM', () => {
  it('1' , () => {
    expect(calculateNumber('SUM', 1, 1)).equals(2);
  });
  it('2' , () => {
    expect(calculateNumber('SUM', 1, 3.7)).equals(5);
  });
  it('3' , () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).equals(5);
  });
});

describe('SUBTRACT', () => {
  it('1' , () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).equals(-2);
  });
  it('2' , () => {
    expect(calculateNumber('SUBTRACT', 6, 3.7)).equals(2);
  });
  it('3' , () => {
    expect(calculateNumber('SUBTRACT', 3, 3)).equals(0);
  });
});

describe('DIVIDE', () => {
  it('1' , () => {
    expect(calculateNumber('DIVIDE', -4, 1.2)).equals(-4);
  });
  it('2' , () => {
    expect(calculateNumber('DIVIDE', 6, 1.6)).equals(3);
  });
  it('3' , () => {
    expect(calculateNumber('DIVIDE', 1.2, 0)).equals('Error');
  });
});
