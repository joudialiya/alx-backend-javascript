const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('spy of Utils', () => {
    const log_spy = sinon.spy(console);
    const utils_stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(utils_stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(utils_stub.callCount).to.be.equal(1);
    expect(log_spy.log.calledWith('The total is: 10'));
    utils_stub.restore();
    log_spy.log.restore();
  });
});
