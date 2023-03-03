"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValueObject {
    is_error() {
        if (!this._value.includes("@") || !this._value.includes(".") || this._value.length < 5) {
            return true;
        }
    }
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
exports.default = EmailValueObject;
