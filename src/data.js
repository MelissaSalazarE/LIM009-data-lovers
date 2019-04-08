const crearListaDePokemones = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({ name: data[i].name, img: data[i].img, type: data[i].type, weaknesses: data[i].weaknesses });
  }
  return arrayMostrar;
};

const ordenarPokemones = (data, tipo) => {
  let ordenar = [];
  for (let i = 0; i < data.length; i++) {
    ordenar.push({ name: data[i].name, img: data[i].img, type: data[i].type, weaknesses: data[i].weaknesses });
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
};

const filtrarPorDebilidad = (data, tipo) => {
  let arrayDebilidad = [];
  arrayDebilidad = data
    .filter((contenido) => {
      for (let i = 0; i < contenido.weaknesses.length; i++) {
        if (contenido.weaknesses[i] === tipo) {
          return 1;
        }
      }
    });
  return arrayDebilidad;
};

const estadistica = (array, data) => {
  let resultado = array.length / data.length;
  let result = resultado.toFixed(2);
  return result;
};


window.pokemon = {
  crearListaDePokemones,
  ordenarPokemones,
  filtrarPokemones,
  filtrarPorDebilidad,
  estadistica,
};