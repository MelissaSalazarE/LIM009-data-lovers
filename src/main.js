const dataPokemon = POKEMON.pokemon;
const containerList= document.getElementById("container-list");


for(let i=0; i<dataPokemon.length; i++){
	containerList.innerHTML+=`
	<div class="ist-group-item">
	<img class="list-group-item" src="${ dataPokemon[i].img }" />
	<label class="ist-group-item"> Nombre : ${ dataPokemon[i].name }</label>
	<label class="ist-group-item"> Tipo : ${ dataPokemon[i].type}</label>
	<label class="ist-group-item"> Habilidades : ${ dataPokemon[i].weaknesses}</label>
	</div>
`;
}
