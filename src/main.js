const dataPokemon = POKEMON.pokemon;
const containerList= document.getElementById("container-list");

for(let i=0; i<dataPokemon.length; i++){
    containerList.innerHTML+=`
    <div class="card-link">
    <label class="name">${ dataPokemon[i].name }</label>
    <img class="image" src="${ dataPokemon[i].img }" />
    <label class="name">${ dataPokemon[i].type}</label>
    </div>
`;
}



//con
//const container = document.getElementById("container-list");
//const mostrarPokemon = pokemon.mostrarPokemones(dataPokemon);

//mostrando el nombre de los pokemones
/*for (a=0; a<dataPokemon.length; a++){
    console.log(dataPokemon[a].name);
}*/
