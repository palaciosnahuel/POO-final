import { Plato } from "../Plato/Plato";

export abstract class Comensal {

    protected pesoGr: number;
    protected comidasIngeridas: Plato[];

    constructor(pesoGr: number) {
        this.pesoGr = pesoGr;
        this.comidasIngeridas = [];
    }

    public comer(comida: Plato): void {
        this.comidasIngeridas.push(comida);
    }

    public abstract leAgrada(comida: Plato): boolean 
    public abstract isSatisfecho(): boolean 
    
}