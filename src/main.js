const dataPokemon = POKEMON.pokemon;
const containerList = document.getElementById('container-list');
  for (let i = 0; i < dataPokemon.length; i++) {
    containerList.innerHTML += `
    <div class = "card" style="width: 12rem;">
    <img class="image" src="${ dataPokemon[i].img }" class="card-img-top" />
    <div class="card-body card-header"> 
    <label class="card-text"> NOMBRE : ${ dataPokemon[i].name }</label>
    <label class="card-text"> Tipo : ${ dataPokemon[i].type }</label>
    <label class="card-text"> Debilidad : ${ dataPokemon[i].weaknesses }</label>
    </div>
    </div> 
    `;
  }
