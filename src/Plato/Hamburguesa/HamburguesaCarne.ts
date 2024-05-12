import { Pan } from "../Pan/Pan";
import { Hamburguesa } from "./Hamburguesa";


export class HamburguesaCarne extends Hamburguesa{

     protected valoracion: number;

     constructor(pan: Pan){
         super(pan,false);
         this.valoracion = this.calcValoracion();
     }

     protected calcValoracion(): number {
         return 60 + this.pan.getValoracion();
     }

}