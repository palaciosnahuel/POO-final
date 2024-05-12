export class CorteCarne {

    private _nombre: string;
    private _calidad: number;
    private _peso: number;

    constructor(nombre: string, calidad: number, peso: number) {
        this._nombre = nombre;
        this._calidad = calidad;
        this._peso = peso;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get calidad(): number {
        return this._calidad;
    }

    public get peso(): number {
        return this._peso;
    }

}
