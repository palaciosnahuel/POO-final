import { Plato } from "../Plato/Plato";
import { Comensal } from "./Comensal";

export class PaladarFino extends Comensal{

    constructor(peso: number) {
        super(peso);
    }

    public leAgrada(comida: Plato): boolean {
        return comida.peso >= 150 && comida.peso <= 300 && comida.getValoracion() > 100;
    }

    public isSatisfecho(): boolean {
        return this.comidasIngeridas.length % 2 == 0;
    }

}