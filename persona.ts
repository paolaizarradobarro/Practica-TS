import { direccion } from './direccion';
import { mail } from './mail';
import { telefono } from './telefono'

export class persona {
    _nombre: string;
    _apellido: string;
    _edad: number;
    _dni: string;
    _cumpleanos: string;
    _colorFavorito: string;
    _sexo: string;
    _direcciones?: direccion;
    _mail?: mail;
    _telefono?: telefono;
    _nota: string;

    constructor(
        nombre:string,
        apellido:string,
        edad:number,
        dni:string,
        cumpleanos:string,
        colorFavorito:string,
        sexo:string,
        nota:string,
        direccion?: direccion,
        mail?: mail,
        telefono?: telefono,
        ){
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

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre= value;
    }

    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido= value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad= value;
    }

    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni= value;
    }

    public get cumpleaños(): string {
        return this._cumpleanos;
    }
    public set cumpleaños(value: string) {
        this._cumpleanos= value;
    }

    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito= value;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo= value;
    }

    public get nota(): string {
        return this._nota;
    }
    public set nota(value: string) {
        this._nota= value;
    }

    public setDirecciones(value: direccion){
        this._direcciones = value;
    }

    setMail(value: mail) {
        this._mail = value;
    }

    setTelefono(value: telefono){
        this._telefono = value;
    }
}