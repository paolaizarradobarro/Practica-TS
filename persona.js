"use strict";
exports.__esModule = true;
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(nombre, apellido, edad, dni, cumpleanos, colorFavorito, sexo, nota, direccion, mail, telefono) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._nota = nota;
        this._direcciones = direccion;
        this._mail = mail;
        this._telefono = telefono;
    }
    Object.defineProperty(persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (value) {
            this._apellido = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleanos;
        },
        set: function (value) {
            this._cumpleanos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (value) {
            this._colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "nota", {
        get: function () {
            return this._nota;
        },
        set: function (value) {
            this._nota = value;
        },
        enumerable: false,
        configurable: true
    });
    persona.prototype.setDirecciones = function (value) {
        this._direcciones = value;
    };
    persona.prototype.setMail = function (value) {
        this._mail = value;
    };
    persona.prototype.setTelefono = function (value) {
        this._telefono = value;
    };
    return persona;
}());
exports.persona = persona;
