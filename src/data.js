/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
const arrayPokemon = POKEMON.pokemon

//imprimiento data
//console.log(arrayPokemon);

//consoleando el nombre de un pokemon
//console.log(arrayPokemon[1].name)

// consolenado los nombres de todos los pokemones
/*for ( a=0; a<arrayPokemon.length; a ++){
    console.log(arrayPokemon[a].name);
}*/

//ordenando de A-Z


const newarray = [];
const arraylongitud = POKEMON.pokemon;

for ( let x=0; x<arraylongitud.length; x++){
    newarray.push(arraylongitud[x].name);
}
 console.log(newarray.sort().reverse(newarray));
 




//return(arrayPokemon.name[1]);




/*
for ( let x =0; x<arrlongitud.length; x++){
    newarray.push(arrlongitud[x].name);
   }
   console.log(newarray.sort());*/