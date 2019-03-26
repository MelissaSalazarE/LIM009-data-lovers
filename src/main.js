// Creando las antallas de la pagina //

const seccionInicio = document.getElementById('inicio');
const seccionPokedex = document.getElementById('pokeDex');

const paginaInicio = document.getElementById('primeraPantalla');
const paginapokedex = document.getElementById('segundaPantalla');

paginaInicio.style.display="block";
paginapokedex.style.display="none";

seccionInicio.addEventListener('click',() => {
	paginaInicio.style.display="block";
	paginapokedex.style.display="none";

});
seccionPokedex.addEventListener('click',() => {
	paginaInicio.style.display="none";
	paginapokedex.style.display="block";

});

// creando las funciones de la primera historia //

const dataPokemon = POKEMON.pokemon;
const containerList= document.getElementById("container-list");

const mostrarPokemon = (dataPokemon)=>{
	let mostrar ='';
for(let i=0; i<dataPokemon.length; i++){
	cartilla =`
	<div class="card-link">
	<img class="list-group-item" src="${ dataPokemon[i].img }" />
	<label class="ist-group-item"> Nombre : ${ dataPokemon[i].name }</label>
	<label class="ist-group-item"> Tipo : ${ dataPokemon[i].type}</label>
	<label class="ist-group-item"> Habilidades : ${ dataPokemon[i].weaknesses}</label>
	</div>
`;
mostrar+=cartilla;
};
containerList.innerHTML+=mostrar;
}
