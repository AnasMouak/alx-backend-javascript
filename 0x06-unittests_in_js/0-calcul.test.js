const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when a is 1 and b is 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a is 1 and b is 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when a is 1.2 and b is 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when a is 1.5 and b is 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when a and b are 0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should return -2 when a is -1.6 and b is -0.4', () => {
    assert.strictEqual(calculateNumber(-1.6, -0.4), -2);
  });
});
