"use strict";
exports.__esModule = true;
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(a, b) {
        this._tipo = a;
        this._numero = b;
    }
    Object.defineProperty(telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return telefono;
}());
exports.telefono = telefono;
