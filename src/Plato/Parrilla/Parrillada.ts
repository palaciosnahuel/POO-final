import { Plato } from "../Plato";
import { CorteCarne } from "./CorteCarne";

export class Parrillada extends Plato{

    protected valoracion: number;
    public cortes: CorteCarne[];
    
    constructor(cortes: CorteCarne[]) {
        super(false);
        const peso = this.calcularPeso(cortes)
        this.peso = peso;
        this.cortes = cortes;
        this.valoracion = this.calcValoracion();
    }
    
    public calcularPeso( cortesCarne : CorteCarne[]): number {
        return cortesCarne.reduce((total, corte) => total + corte.peso, 0);
    }
    
    protected calcValoracion(): number {
        const maxCalidad = Math.max(...this.cortes.map(corte => corte.calidad));
        const cantidadCortes = this.cortes.length;
        const valoracion = 15 * maxCalidad - cantidadCortes;
        return Math.max(valoracion, 0);
    }

}