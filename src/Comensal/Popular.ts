import { Plato } from "../Plato/Plato";
import { Comensal } from "./Comensal";

export class Popular extends Comensal {

    constructor(peso: number) {
        super(peso);
    }

    public leAgrada(comida: Plato): boolean {
        return comida.getIsAbundante();
    }

    public isSatisfecho(): boolean {
        return this.comidasIngeridas.some(comida => comida.getIsAbundante());
    }

}