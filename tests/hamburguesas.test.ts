import { HamburguesaVegetariana } from "../src/Plato/Hamburguesa/HamburguesaVegetariana";
import { PanCasero } from "../src/Plato/Pan/PanCasero";
import { PanMasaMadre } from "../src/Plato/Pan/PanMasaMadre";

describe("Hamburguesa Vegetariana, Pan MasaMadre", () => {

  const pan = new PanMasaMadre();
  const hamburguesa = new HamburguesaVegetariana(pan, "lentejas");

  it("La valoración de la HamburguesaVegetariana debe ser calculada correctamente", () => {
    // Para este ejemplo, usamos un pan con valoración de 45 y legumbre de lentejas (8 letras)
    // La valoración esperada será: 60 + 45 + (8 * 2) = 121
    expect(hamburguesa.getValoracion()).toBe(121);
  });

});


describe("Hamburguesa Vegetariana, Pan Casero ", () => {

    const pan = new PanCasero();
    const hamburguesa = new HamburguesaVegetariana(pan, "lentejas");
  
    it("La valoración de la HamburguesaVegetariana debe ser calculada correctamente", () => {
      // Para este ejemplo, usamos un pan con valoración de 20 y legumbre de lentejas (8 letras)
      // La valoración esperada será: 60 + 20 + (8 * 2) = 121
      expect(hamburguesa.getValoracion()).toBe(96);
    });
    
  });