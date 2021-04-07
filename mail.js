"use strict";
exports.__esModule = true;
exports.mail = void 0;
var mail = /** @class */ (function () {
    function mail(a, b) {
        this._tipo = a;
        this._direccion = b;
    }
    Object.defineProperty(mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    return mail;
}());
exports.mail = mail;
