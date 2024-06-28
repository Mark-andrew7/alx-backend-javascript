export default class Currency {
    constructor(code, name) {
        this._name = this.verifyType(name, 'string', 'Name');
        this._code = this.verifyType(code, 'string', 'Code');
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = this.verifyType(value, 'string', 'Name')
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = this.verifyType(value, 'string', 'Code');
    }

    verifyType(value, expectedType, attributeName) {
        if (typeof value !== expectedType) {
            throw new TypeError(`${attributeName} must be a ${expectedType}`)
        }
        return value
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})` 
    }
}