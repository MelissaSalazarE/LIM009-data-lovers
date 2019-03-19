const arrayPokemon = POKEMON.pokemon;
// console.log(arrayPokemon);
const containerList = document.getElementById('container-list');
const arrayMostrado = pokemon.mostrarPokemones(arrayPokemon);

const crearPlantilla = (data) => {
    let plantilla = '';
    data.forEach((data) => {
      let carta = `
      <div class = "card-link">
      <label class="name">${ data.name }</label>
      <img class="image" src="${ data.img }" /> 
      <label class="type">${ data.type }</label>
      <label class="weaknesses">${ data.weaknesses }</label>
      </div>
      `;
      plantilla += carta;
    });
    containerList.innerHTML = plantilla;
  };
  crearPlantilla(arrayMostrado);