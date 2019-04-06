require('../src/data');
require('./data.spec.js');

//  pokemon es un objeto  //

describe('pokemon', () => {
  it('es un objeto', () => {
    expect(typeof window.pokemon).toBe('object');
  });
});

const input = [
  {'name': 'Paras', 'img': 'http://www.serebii.net/pokemongo/pokemon/046.png', 'type': ['Bug', 'Grass'], 'weaknesses': ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock']},
  {'name': 'Zubat', 'img': 'http://www.serebii.net/pokemongo/pokemon/041.png', 'type': ['Poison', 'Flying'], 'weaknesses': ['Electric', 'Ice', 'Psychic', 'Rock']},
  {'name': 'Bulbasaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/001.png', 'type': ['Grass', 'Poison'], 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Ivysaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/002.png', 'type': ['Grass', 'Poison'], 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'name': 'Venusaur', 'img': 'http://www.serebii.net/pokemongo/pokemon/003.png', 'type': ['Grass', 'Poison'], 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
];

const ordenado1 = 'Az';
const ordenado2 = 'Za';

const inputNomnbres = [{'name': 'Paras'}, {'name': 'Zubat'}, {'name': 'Bulbasaur'}, {'name': 'Ivysaur'}, {'name': 'Venusaur'}];
const outputOrdenadoZA = [{'name': 'Zubat'}, {'name': 'Venusaur'}, {'name': 'Paras'}, {'name': 'Ivysaur'}, {'name': 'Bulbasaur'}];
const outputOrdenadoAZ = [{'name': 'Bulbasaur'}, {'name': 'Ivysaur'}, {'name': 'Paras'}, {'name': 'Venusaur'}, {'name': 'Zubat'}];

const filtarTipo = 'Bug';
const outputTipo = [{'name': 'Paras', 'img': 'http://www.serebii.net/pokemongo/pokemon/046.png', 'type': ['Bug', 'Grass'], 'weaknesses': ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock']}];

const filtarDebilidad = 'Electric';
const outputPorDebilidad = [{'name': 'Zubat', 'img': 'http://www.serebii.net/pokemongo/pokemon/041.png', 'type': ['Poison', 'Flying'], 'weaknesses': ['Electric', 'Ice', 'Psychic', 'Rock']}];


 /* const inputEstadistica = [
  {'name': 'Paras', 'img': 'http://www.serebii.net/pokemongo/pokemon/046.png', 'type': ['Bug', 'Grass'], 'weaknesses': ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Rock']},
  {'name': 'Zubat', 'img': 'http://www.serebii.net/pokemongo/pokemon/041.png', 'type': ['Poison', 'Flying'], 'weaknesses': ['Electric', 'Ice', 'Psychic', 'Rock']},
  {'name': 'Dratini', 'img': 'http://www.serebii.net/pokemongo/pokemon/147.png', 'type': ['Dragon'], 'weaknesses': ['Ice', 'Dragon', 'Fairy']},
  {'name': 'Dragonair', 'img': 'http://www.serebii.net/pokemongo/pokemon/148.png', 'type': ['Dragon'], 'weaknesses': ['Ice', 'Dragon', 'Fairy']},
  {'name': 'Dragonair', 'img': 'http://www.serebii.net/pokemongo/pokemon/148.png', 'type': ['Dragon'], 'weaknesses': ['Ice', 'Dragon', 'Fairy']},
];
const outputEstadistica = [
  {'name': 'Dratini', 'img': 'http://www.serebii.net/pokemongo/pokemon/147.png', 'type': ['Dragon'], 'weaknesses': ['Ice', 'Dragon', 'Fairy']},
  {'name': 'Dragonair', 'img': 'http://www.serebii.net/pokemongo/pokemon/148.png', 'type': ['Dragon'], 'weaknesses': ['Ice', 'Dragon', 'Fairy']},
  {'name': 'Dragonair', 'img': 'http://www.serebii.net/pokemongo/pokemon/148.png', 'type': ['Dragon'], 'weaknesses': ['Ice', 'Dragon', 'Fairy']},
];

const contador = 0.019*/

describe(pokemon.crearListaDePokemones, () => {
  it('es un función', () => {
    expect(typeof window.pokemon.crearListaDePokemones).toBe('function');
  });
  it('te devuelve la lista', () => {
    expect(window.pokemon.crearListaDePokemones(input)).not.toBe(input);
  });
});

describe(pokemon.ordenarPokemones, () => {
  it('es un función', () => {
    expect(typeof window.pokemon.ordenarPokemones).toBe('function');
  });
  it('se ordena de AZ', () => {
    expect(window.pokemon.ordenarPokemones(inputNomnbres, ordenado1)).toEqual(outputOrdenadoAZ);  
  });
  it('se ordena de Za', () => {
    expect(window.pokemon.ordenarPokemones(inputNomnbres, ordenado2)).toEqual(outputOrdenadoZA);
  });
});

describe(pokemon.filtrarPokemones, () => {
  it('es un función', () => {
    expect(typeof window.pokemon.filtrarPokemones).toBe('function');
  });
  it('se filtra un pokemon por tipo Bug', () => {
    expect(window.pokemon.filtrarPokemones(input, filtarTipo)).toEqual(outputTipo);
  });
});

describe(pokemon.filtrarPorDebilidad, () => {
  it('es un función', () => {
    expect(typeof window.pokemon.filtrarPorDebilidad).toBe('function');
  });
  it('se filtra un pokemon por debilidad Electric', () => {
    expect(window.pokemon.filtrarPorDebilidad(input, filtarDebilidad)).toEqual(outputPorDebilidad);
  });
});

describe(pokemon.estadistica, () => {
  it('es un función', () => {
    expect(typeof window.pokemon.estadistica).toBe('function');
  });
});
  /* it('es un función', () => {
    expect(window.pokemon.estadistica(contador, inputEstadistica).toEqual(outputEstadistica);
  });*/
