import { Pan } from "../Pan/Pan";
import { Plato } from "../Plato";

export abstract class Hamburguesa extends Plato{

    protected pan: Pan;

    constructor(pan: Pan,isVegetariano:boolean) {
        super(isVegetariano,250)
        this.pan = pan;
    }

}


