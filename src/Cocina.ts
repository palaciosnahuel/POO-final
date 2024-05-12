import { Comensal } from "./Comensal/Comensal";
import { Plato } from "./Plato/Plato";

export class Cocina {

    private _comidas: Plato[];

    constructor(comidas: Plato[]) {
        this._comidas = comidas;
    }

    
    public get comidas() : Plato[] {
        return this._comidas
    }
    

    public tieneBuenaOfertaVegetariana(): boolean {
        const vegetarianas = this.comidas.filter(comida => comida.getIsVegetariano()).length;
        const noVegetarianas = this.comidas.length - vegetarianas;
        return vegetarianas - noVegetarianas <= 2;
    }

    public obtenerPlatoFuerteCarnivoro(): Plato {
        const platosCarnivoros = this.comidas.filter(comida => !comida.getIsVegetariano());
        if (platosCarnivoros.length === 0) {
            throw new Error("No hay platos aptos vegetarianos");
        }
        return platosCarnivoros.reduce((platoFuerte, comida) => (comida.getValoracion() > platoFuerte.getValoracion() ? comida : platoFuerte));
    }

    public getComidasQueLeGustanAComensal(comensal: Comensal): Plato[] {
        return this.comidas.filter(comida => comensal.leAgrada(comida));
    }

    public elegirPlatoParaComensal(comensal: Comensal): Plato {
        const comidasQueLeGustan = this.getComidasQueLeGustanAComensal(comensal);

        if (comidasQueLeGustan.length === 0)  throw new Error("El comensal no le gusta ninguna comida dela cocina.");

        for (const comida of comidasQueLeGustan) {
            this.retirarComida(comida)
            comensal.comer(comida);
            return comida;
        }
    
        throw new Error("No le gusta ninguna comida al comensal.");
    }
    
    // Método para retirar un plato de la cocina
    private retirarComida(comida: Plato): void {

        const indice = this.comidas.indexOf(comida);
        if (indice !== -1) {
            this.comidas.splice(indice, 1);
        }

    }
}