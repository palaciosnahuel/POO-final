import { Plato } from "./Plato";

export class Provoleta extends Plato {

    protected valoracion: number;
    private containEspecias: boolean;

    constructor(peso: number, containEspecias: boolean) {

        super(!containEspecias, peso);
        this.containEspecias = containEspecias;
        this.valoracion = this.calcValoracion()

    }

    public getIsEspecial(): boolean {
        return this.getIsAbundante() || this.containEspecias;
    }

    protected calcValoracion(): number {
        const abundanteOrTieneEspecias = this.getIsAbundante() || this.containEspecias;
        if (abundanteOrTieneEspecias) {
            return 120; 
        } else {
            return 80; 
        }
    }

}


