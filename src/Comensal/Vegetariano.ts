import { Plato } from "../Plato/Plato";
import { Comensal } from "./Comensal";

export class Vegetariano extends Comensal {

    constructor(peso: number) {
        super(peso);
    }

    public leAgrada(comida: Plato): boolean {
        return comida.getIsVegetariano() && comida.getValoracion() > 85;
    }

    public isSatisfecho(): boolean {
        return this.comidasIngeridas.every(comida => !comida.getIsAbundante());
    }

}