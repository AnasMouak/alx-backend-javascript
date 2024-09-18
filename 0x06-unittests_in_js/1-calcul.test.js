const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a is 2.4, and b is 3.6', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.6), 6);
    });

    it('should return 0 when type is SUM, a is -0.4, and b is 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 when type is SUBTRACT, a is 3.4, and b is 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 4.5), -2);
    });

    it('should return 3 when type is SUBTRACT, a is 3.5, and b is 1.2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1.2), 3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2.25 when type is DIVIDE, a is 8.5, and b is 3.9', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.5, 3.9), 2.25);
    });

    it('should return "Error" when type is DIVIDE, a is 7.4, and b is 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.4, 0.2), 'Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error when type is invalid', () => {
      assert.throws(() => calculateNumber('INVALID', 3, 4), {
        message: 'Invalid type',
      });
    });
  });
});
