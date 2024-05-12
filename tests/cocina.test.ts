import { Cocina } from "../src/Cocina";
import { Vegetariano } from "../src/Comensal/Vegetariano";
import { HamburguesaCarne } from "../src/Plato/Hamburguesa/HamburguesaCarne";
import { HamburguesaVegetariana } from "../src/Plato/Hamburguesa/HamburguesaVegetariana";
import { PanMasaMadre } from "../src/Plato/Pan/PanMasaMadre";
import { Plato } from "../src/Plato/Plato";


describe('Cocina, Vegetariano', () => {

    const panMasaMadre = new PanMasaMadre()

    const hamburguesaCarne = new HamburguesaCarne(panMasaMadre)

    const hamburguesaVegetariana = new HamburguesaVegetariana(panMasaMadre, "garbanzos");
    const hamburguesaVegetariana2 = new HamburguesaVegetariana(panMasaMadre, "garbanzos");
    const hamburguesaVegetariana3 = new HamburguesaVegetariana(panMasaMadre, "garbanzos");

    const platos: Plato[] = [hamburguesaCarne, hamburguesaVegetariana, hamburguesaVegetariana2, hamburguesaVegetariana3];
    const platosQueLeGustan: Plato[] = [hamburguesaVegetariana, hamburguesaVegetariana2, hamburguesaVegetariana3];

    const cocina = new Cocina(platos);
    const comensalVegetariano = new Vegetariano(500)

    it('Si tiene buena oferta vegetariana', () => {
        expect(cocina.tieneBuenaOfertaVegetariana()).toBeTruthy();
    });

    it('Dado un comensal, la lista de comidas que le gustan', () => {
        const platosQueLeGustanTest = cocina.getComidasQueLeGustanAComensal(comensalVegetariano);
        expect(platosQueLeGustanTest).toEqual(platosQueLeGustan);
    });

    // También se pide poder elegir un plato para un comensal - por ahora es cualquier plato que le guste. Si no le gusta ningún plato, lanzar un error. 
    // Si el plato existe, sacarlo de la cocina y hacer que el comensal lo coma.
    it('Comer comida y sacarlo del a cocina', () => {
        cocina.elegirPlatoParaComensal(comensalVegetariano)
        expect(cocina.comidas).toEqual([hamburguesaCarne, hamburguesaVegetariana2, hamburguesaVegetariana3]);
    });

});


describe('Cocina, Carnivoro', () => {

    const panMasaMadre = new PanMasaMadre()
    const hamburguesaCarne = new HamburguesaCarne(panMasaMadre)

    const platos: Plato[] = [hamburguesaCarne];
    const cocina = new Cocina(platos);

    it('obtenerPlatoFuerteCarnivoro debería retornar el plato con mayor valoración entre los no vegetarianos', () => {
        expect(cocina.obtenerPlatoFuerteCarnivoro()).toEqual(hamburguesaCarne);
    });


});
