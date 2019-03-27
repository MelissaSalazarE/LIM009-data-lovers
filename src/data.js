// 
const crearListaDePokemones = (data) => {
	let arrayMostrar = [];
	for (let i = 0; i < data.length; i++) {
		arrayMostrar.push({ name: data[i].name, img: data[i].img, type: data[i].type, weaknesses: data[i].weaknesses})
	}
	return arrayMostrar;
};

const ordenarPokemones = (data, tipo) => {
	let ordenar = [];
	for (let i = 0; i < data.length; i++) {
		ordenar.push({name: data[i].name, img: data[i].img, type: data[i].type, weaknesses: data[i].weaknesses});
	}
		ordenar.sort((firtsName,lastName) => {
			if (firtsName.name > lastName.name) { 
			return 1;
			}
			if (firtsName.name < lastName.name) { 
			return -1;
			}
			return 0;
		});

	if (tipo ==='Az') {
	return ordenar;
	}
	if (tipo ==='Za') {
  return ordenar.reverse();
	}
};

	window.pokemon = {
		crearListaDePokemones,
		ordenarPokemones,
	}