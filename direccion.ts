export class direccion {
    _calle : string;
    _numero: number;
    _piso: number;
    _letra: string;
    _codigopostal: number;
    _poblacion: string;
    _provincia: string;


 constructor(a:string, b:number, c:number, d:string, e: number, f:string, g:string){
     this._calle= a;
     this._numero = b;
     this._piso = c;
     this._letra = d;
     this._codigopostal = e;
     this._poblacion = f;
     this._provincia = g;


 }
 public get calle(): string {
    return this._calle;
    }
    public set calle(value: string) {
        this._calle= value;
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero= value;

    }

    public get piso(): number {
        return this._piso;
    }
    public set piso(value: number) {
        this._piso= value;

    }

    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra= value;

    }

    public get codigopostal(): number {
        return this._codigopostal;
    }
    public set codigopostal(value: number) {
        this._codigopostal= value;

    }

    public get poblacion(): string {
        return this._poblacion;
    }
    public set poblacion(value: string) {
        this._poblacion= value;

    }
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia= value;

    }


}