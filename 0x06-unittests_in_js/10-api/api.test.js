const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/1`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-1`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/joudia`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /available_payments', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, _body) => {
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(_body)).to.be.deep.equal(obj);
      done();
    });
  });

  it.skip('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'joudia'}}, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(_body).to.be.equal('Welcome joudia');
      done();
    });
  });
});
