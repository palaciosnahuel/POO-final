
export abstract class Pan {
    protected valoracion: number;

    constructor(valoracion: number) {
        this.valoracion = valoracion;
    }

    getValoracion() : number{
        return this.valoracion;
    };
}
