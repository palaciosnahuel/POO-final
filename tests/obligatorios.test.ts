import { PaladarFino } from "../src/Comensal/PaladarFino";
import { Popular } from "../src/Comensal/Popular";
import { Vegetariano } from "../src/Comensal/Vegetariano";
import { HamburguesaCarne } from "../src/Plato/Hamburguesa/HamburguesaCarne";
import { HamburguesaVegetariana } from "../src/Plato/Hamburguesa/HamburguesaVegetariana";
import { PanCasero } from "../src/Plato/Pan/PanCasero";
import { PanMasaMadre } from "../src/Plato/Pan/PanMasaMadre";
import { CorteCarne } from "../src/Plato/Parrilla/CorteCarne";
import { Parrillada } from "../src/Plato/Parrilla/Parrillada";
import { Provoleta } from "../src/Plato/Provoleta";

// 4.1 Comidas

describe("Valoración de la Hambruguesa de Carne con pan casero.", () => {

  const pan = new PanCasero()
  const hamburguesa = new HamburguesaCarne(pan)
  
  it("El resultado será: 80 (60 + 20)", () => {
    expect(hamburguesa.getValoracion()).toEqual(80);
  });
  
});

describe("Valoración de la Hambruguesa Vegetariana, con pan de masaMadre y de garbanzos como legumbre.", () => {

  const pan = new PanMasaMadre()
  const hamburguesa = new HamburguesaVegetariana(pan, "garbanzos")

  it("El resultado será: 122 (60 + 45 + 17)", () => {
    expect(hamburguesa.getValoracion()).toEqual(122);
  });

});

describe("Provoleta, de peso 190 y con especias.", () => {

  const provo = new Provoleta(190, true);

  it("El resultado de ser especial es: true", () => {
    expect(provo.getIsEspecial).toBeTruthy();
  });

});

describe("Parillada, que incluya un asado, de calidad 10 y peso 250 gramos, una entraña, de calidad 7 y peso 200 gramos y un chorizo, de calidad 8 y peso 50 gramos.", () => {
  
  const cortes: CorteCarne[] = [
    new CorteCarne('Asado', 10, 250),
    new CorteCarne('Entraña', 7, 200),
    new CorteCarne('Chorizo', 8, 50)
  ];

  const parrillada = new Parrillada(cortes);

  it("El resultado de ser especial es: true", () => {
    expect(parrillada.getValoracion()).toBe(147);
  });

});

// 4.2 Comensales

describe("Un vegetariano de peso 68500 gramos come una provoleta de 190 gramos con especias y dos Hamburguesas Vegetarianas (250 grs cada una) con pan de masaMadre y de garbanzos como legumbre", () => {
  
  const vegetariano = new Vegetariano(68500);
  const provoleta = new Provoleta(190, true); // Provoleta con especias
  const hamburguesa1 = new HamburguesaVegetariana(new PanMasaMadre, 'garbanzos'); // Hamburguesa con pan de masaMadre y legumbre de garbanzos
  const hamburguesa2 = new HamburguesaVegetariana(new PanMasaMadre, 'garbanzos'); // Otra Hamburguesa con pan de masaMadre y legumbre de garbanzos
  
  vegetariano.comer(provoleta);
  vegetariano.comer(hamburguesa1);
  vegetariano.comer(hamburguesa2);

  it("El resultado si esta satisfecho es: True porque (190 + 250 + 250) >= (68500 * 0.01) y además ninguna de las tres comidas es abundante, es decir, ninguna supera los 250 gramos.", () => {
    expect(vegetariano.isSatisfecho()).toBeTruthy();
  });

});


describe("Un comensal popular de peso 85000 gramos come una parrillada que incluye un asado, de calidad 10 y peso 250 gramos, una entraña, de calidad 7 y peso 200 gramos y un chorizo, de calidad 8 y peso 50 gramos.", () => {
  
  const popular = new Popular(85000);
  const cortes: CorteCarne[] = [
    new CorteCarne('Asado', 10, 250),
    new CorteCarne('Entraña', 7, 200),
    new CorteCarne('Chorizo', 8, 50)
  ];
  const parrillada = new Parrillada(cortes);
  popular.comer(parrillada);

  it("El resultado si esta satisfecho es: True porque (190 + 250 + 250) >= (68500 * 0.01) y además ninguna de las tres comidas es abundante, es decir, ninguna supera los 250 gramos.", () => {
    expect(popular.isSatisfecho()).toBeTruthy();
  });

});


describe("Un comensal de paladar fino le agrada comer una Hamburguesa de carne de 250 gramos con pan de masa madre.", () => {

  const paladarFino = new PaladarFino(200);
  const hamburguesa = new HamburguesaCarne(new PanMasaMadre()) 

  it("le agrada comer una Hamburguesa de carne de 250 gramos con pan de masa madre.", () => {
    expect(paladarFino.leAgrada(hamburguesa)).toBeTruthy();
  });

});


describe("Un comensal de paladar fino NO le agrada comer una Hamburguesa de carne de 250 gramos con pan de masa madre.", () => {

  const paladarFino = new PaladarFino(200);
  const hamburguesa = new HamburguesaCarne(new PanCasero()) 

  it("le agrada comer una Hamburguesa de carne de 250 gramos con pan de masa madre.", () => {
    expect(paladarFino.leAgrada(hamburguesa)).toBeFalsy();
  });
  
});
