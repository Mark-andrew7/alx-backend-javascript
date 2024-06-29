import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = this.verifyType(amount, 'number', 'Amount');
        this._currency = this.verifyCurrency(currency);
    }

        get amount() {
            return this._amount;
        }

        set amount(value) {
            this._amount = this.verifyType(amount, 'number', 'Amount');
        }

        get currency() {
            return this._currency;
        }

        set currency(value) {
            this._currency = this.verifyCurrency(currency);
        }

        verifyType(value, expectedType, attributeName) {
            if (typeof value !== expectedType) {
                throw new TypeError(`${attributeName} must be a ${expectedType}`)
            }
            return value;
        }

        verifyCurrency(currency) {
            if (!(currency instanceof Currency)) {
                throw new TypeError('Currency must be an instance of Currency class')
            }
            return currency;
        }

        displayFullPrice() {
            return `${this._amount} ${this._currency.name} (${this._currency.code})`
        }

        static convertPrice(amount, conversionRate) {
            return amount * conversionRate;
        }

}
