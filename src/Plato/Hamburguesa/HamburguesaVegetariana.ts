import { Pan } from "../Pan/Pan";
import { Hamburguesa } from "./Hamburguesa";

export class HamburguesaVegetariana extends Hamburguesa {

    protected valoracion: number;
    private legumbre : string;

    constructor(pan: Pan, tipoLegumbre: string) {
        super(pan, true);
        this.legumbre = tipoLegumbre;
        this.valoracion = this.calcValoracion();
    }

    protected calcValoracion(): number {
        const letters: number = this.legumbre.trim().length;
        let legumbreValoracionPlus: number = letters * 2;
        if (legumbreValoracionPlus > 17) {
            legumbreValoracionPlus = 17;
        }
        return 60 + this.pan.getValoracion() + legumbreValoracionPlus;
    }

}