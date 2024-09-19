const sinon = require('sinon');
const chai = require('chai');
const { sendPaymentRequestToApi } = require('./5-payment');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  // Runs before each test
  beforeEach(function() {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  // Runs after each test
  afterEach(function() {
    // Restore the original console.log after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    // Call the function with 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    // Verify that console.log was called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    // Call the function with 10 and 10
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    // Verify that console.log was called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
