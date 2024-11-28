const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('spy of Utils', () => {
    const utils_spy = sinon.spy(Utils);
    
    sendPaymentRequestToApi(100, 20);
    expect(utils_spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utils_spy.calculateNumber.callCount).to.be.equal(1);
    utils_spy.calculateNumber.restore();
  });
});
