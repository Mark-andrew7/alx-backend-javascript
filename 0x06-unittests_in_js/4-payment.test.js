const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(function () {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call calculateNumber with SUM, 100, 20 and log "The total is: 10"', function () {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
