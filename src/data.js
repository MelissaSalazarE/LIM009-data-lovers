// 
/* const crearListaDePokemones = (data) => {
	let arrayMostrar = [];
	for (let i = 0; i < data.length; i++) {
		arrayMostrar.push({ name: data[i].name, img: data[i].img, type: data[i].type, weaknesses: data[i].weaknesses, next_evolution: data[i].next_evolution})
	}
	return arrayMostrar;
}; */

const ordenarPokemones = (data, tipo) => {
	let ordenar = [];
	for (let i = 0; i < data.length; i++) {
		ordenar.push({ name: data[i].name, img: data[i].img, type: data[i].type, weaknesses: data[i].weaknesses, next_evolution: data[i].next_evolution });
	}
	ordenar.sort((firtsName, lastName) => {
		if (firtsName.name > lastName.name) {
			return 1;
		}
		if (firtsName.name < lastName.name) {
			return -1;
		}
		return 0;
	});

	if (tipo === 'Az') {
		return ordenar;
	}
	if (tipo === 'Za') {
		return ordenar.reverse();
	}

};
const filtrarPokemones = (data, tipo) => {
	let arrayFiltrar = [];
	arrayFiltrar = data
		.filter((contenido) => {
			for (let i = 0; i < contenido.type.length; i++) {
				if (contenido.type[i] === tipo) {
					return 1;
				}
			}
		});
	return arrayFiltrar;
}

<<<<<<< HEAD
const filtrarEvolucion = (data, tipo) => {
	let arrayEvolucion = [];
	arrayEvolucion = data
		.filter((contenido) => {
			for (let i = 0; i < contenido.next_evolution.length; i++) {
				if (contenido.next_evolution[i] === tipo) {
=======

const filtrarPorDebilidad = (data, tipo) => {
	let arrayDebilidad = [];
	arrayDebilidad = data
		.filter((contenido) => {
	
			for (let i = 0; i < contenido.weaknesses.length; i++) {
				if (contenido.weaknesses[i] === tipo) {
>>>>>>> 22de9b98016da35141ca4f0aa7d40bbe9f4cc821
					return 1;
				}
			}
		});
<<<<<<< HEAD
		return arrayEvolucion;
		
}

//const contarDebilidad=POKEMON.pokemon;
=======
		//return(arrayDebilidad.length/data.length);


		return arrayDebilidad;

	}

	const estadistica= (array,data)=>{
		return array.length/data.length;

	}

/*const contarDebilidad=POKEMON.pokemon;
>>>>>>> 22de9b98016da35141ca4f0aa7d40bbe9f4cc821
//console.log(Object.values(POKEMON.pokemon));
// let menor=0
// for ( let i=1; i<contarDebilidad.length;i++){
//   let contar=contarDebilidad[i].weaknesses.length;
//   //console.log(contarDebilidad[i].weaknesses);
//   if (contar<contarDebilidad[menor].weaknesses.length){
// menor=i;
//   }
 
<<<<<<< HEAD
//   }
// 	console.log(menor);
const contar= (data)=>{
	let menor = 0;
	let array =[];
	for (let i = 1; i < data.length; i++) {		
		let element = data[i].weaknesses.length;
				 if(element < data[menor].weaknesses.length){ 
			array.push(data[i]);
			menor = i;
		
		}	else {
	 menor += data[menor].weaknesses.length;
}
} 
}

/* const evolucion  = POKEMON.pokemon;
	for (let i = 0 ; i < evolucion.length; i++) {
		const mostrar = evolucion[i].next_evolution;
console.log(mostrar);
} */
// const cantidadDeEvolucionesPorPokemon = {cero:81,uno:53,dos:16,tres:1};
// let porcentajeDeEvolucion= Object.values(cantidadDeEvolucionesPorPokemon);
// console.log(porcentajeDeEvolucion);
=======
  }
  console.log(menor);*/
>>>>>>> 22de9b98016da35141ca4f0aa7d40bbe9f4cc821


window.pokemon = {
//	crearListaDePokemones,
	ordenarPokemones,
	filtrarPokemones,
<<<<<<< HEAD
	filtrarEvolucion,
	contar,
	//evolucion,
=======
	filtrarPorDebilidad,
	estadistica,

>>>>>>> 22de9b98016da35141ca4f0aa7d40bbe9f4cc821
}
