"use strict";
exports.__esModule = true;
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(a, b, c, d, e, f, g) {
        this._calle = a;
        this._numero = b;
        this._piso = c;
        this._letra = d;
        this._codigopostal = e;
        this._poblacion = f;
        this._provincia = g;
    }
    Object.defineProperty(direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        set: function (value) {
            this._calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (value) {
            this._piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (value) {
            this._letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "codigopostal", {
        get: function () {
            return this._codigopostal;
        },
        set: function (value) {
            this._codigopostal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (value) {
            this._poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    return direccion;
}());
exports.direccion = direccion;
