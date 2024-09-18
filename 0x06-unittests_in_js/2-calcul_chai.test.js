const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a is 2.4, and b is 3.6', () => {
      expect(calculateNumber('SUM', 2.4, 3.6)).to.equal(6);
    });

    it('should return 0 when type is SUM, a is -0.4, and b is 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when type is SUBTRACT, a is 3.4, and b is 4.5', () => {
      expect(calculateNumber('SUBTRACT', 3.4, 4.5)).to.equal(-2);
    });

    it('should return 3 when type is SUBTRACT, a is 3.5, and b is 1.2', () => {
      expect(calculateNumber('SUBTRACT', 3.5, 1.2)).to.equal(3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2.25 when type is DIVIDE, a is 8.5, and b is 3.9', () => {
      expect(calculateNumber('DIVIDE', 8.5, 3.9)).to.equal(2.25);
    });

    it('should return "Error" when type is DIVIDE, a is 7.4, and b is 0.2', () => {
      expect(calculateNumber('DIVIDE', 7.4, 0.2)).to.equal('Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error when type is invalid', () => {
      expect(() => calculateNumber('INVALID', 3, 4)).to.throw('Invalid type');
    });
  });
});
