export class telefono {
    _tipo: string;
    _numero: number;

    constructor(a:string, b:number){
        this._tipo = a;
        this._numero = b;
    }

    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(value: string) {
        this._tipo= value; 
    }

    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero= value; 
    }

}