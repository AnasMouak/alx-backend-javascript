const { getPaymentTokenFromAPI } = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with { data: "Successful response from the API" } when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert the response object
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Signal that the test is complete
      })
      .catch((error) => {
        done(error); // In case of failure, pass the error to done
      });
  });
});
