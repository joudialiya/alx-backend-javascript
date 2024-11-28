const { expect } = require('chai');
const calculateNumber = require('./1-calcul');


describe("SUM", function() {
  it("1", function() {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
  });
  it("2", function() {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
  });
});

describe("SUBTRACT", function() {
  it("1", function() {
      expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
  });
  it("2", function() {
      expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
  });
  it("3", function() {
      expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
  });
});

describe("DIVIDE", function() {
  it("1", function() {
      expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
  });
  it("2", function() {
      expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
  });
  it("3", function() {
      expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
  });
});
