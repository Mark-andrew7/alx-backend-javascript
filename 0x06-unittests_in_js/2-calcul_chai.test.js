const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6', function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);  });
  });

  describe('SUBTRACT', function() {
    it('should return -2', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3', function() {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should return -3', function() {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.25', function() {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return 0.25', function() {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });
    it('should return Error', function() {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });
  });
});