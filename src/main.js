// Creando las antallas de la pagina //

const seccionInicio = document.getElementById('inicio');
const seccionPokedex = document.getElementById('pokeDex');
const paginaInicio = document.getElementById('primeraPantalla');
const paginapokedex = document.getElementById('segundaPantalla');

paginaInicio.style.display = "block";
paginapokedex.style.display = "none";

seccionInicio.addEventListener('click', () => {
	paginaInicio.style.display = "block";
	paginapokedex.style.display = "none";

});
seccionPokedex.addEventListener('click', () => {
	paginaInicio.style.display = "none";
	paginapokedex.style.display = "block";

});

// creando las funciones de la primera historia //

const containerList = document.getElementById('container-list');
const pokemonesOrdenados = document.getElementById('orden-pokemon');
const dataPokemon = POKEMON.pokemon;

const arrayPokemon = pokemon.crearListaDePokemones(dataPokemon);

const listaDePokemones = (data) => {
	let mostrar = '';
	for (let i = 0; i < data.length; i++) {
		cartilla = `
	<div class="card-link">
	<img class="list-group-item" src="${ data[i].img}" />
	<label class="ist-group-item"> Nombre : ${ data[i].name}</label>
	<label class="ist-group-item"> Tipo : ${ data[i].type}</label>
	<label class="ist-group-item"> Habilidades : ${ data[i].weaknesses}</label>
	</div>
`;
	mostrar += cartilla;
	};
	containerList.innerHTML = mostrar;
}
listaDePokemones(arrayPokemon);

// la funcion para el ordenado //

pokemonesOrdenados.addEventListener("change", () => {
	const ordenando= pokemon.ordenarPokemones(dataPokemon, pokemonesOrdenados.value);
	listaDePokemones(ordenando);
});

// filtrado
const pokemonesFiltrados = document.getElementById("tipo-pokemon");
pokemonesFiltrados.addEventListener("change", () => {
	const filtrando = pokemon.filtrarPokemones(dataPokemon, pokemonesFiltrados.value);
	listaDePokemones(filtrando);
});

