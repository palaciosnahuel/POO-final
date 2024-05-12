// Abstract class Plato
export abstract class Plato {

    private _peso: number;
    private isPlatoVegetariano: boolean;
    protected abstract valoracion: number;

    constructor(vegetariano: boolean, peso?: number) {
        this._peso = peso ?? 0;
        this.isPlatoVegetariano = vegetariano;
    }
    
    protected set peso(peso: number) {
        this._peso = peso;
    }   

    get peso(): number {
        return this._peso;
    }
    
    public getIsVegetariano(): boolean {
        return this.isPlatoVegetariano;
    }

    public getIsAbundante(): boolean {
        return this._peso > 250;
    }

    public getValoracion(): number {
        return this.valoracion;
    }

    protected abstract calcValoracion() : number;
    
}
