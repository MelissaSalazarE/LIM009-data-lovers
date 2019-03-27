const mostrarPokemones=(data)=>{
    let arrayMostrar =[];
    for (let i = 0; i < data.length; i++) {
        arrayMostrar.push({name:data[i].name, img:data[i].img, })
        
    }
    return arrayMostrar;
}

window.pokemon={
    mostrarPokemones
}

const arrayNombres =POKEMON.pokemon;
newarray = [];
for(i=0; i<arrayNombres.length; i++){
	newarray.push(arrayNombres[i].name);
	}

function ordenarAZ(a, b) {
	if(typeof a === 'string' && typeof b === 'string'){
	  a = a.toLowerCase();
	  b = b.toLowerCase();  
	}  
	if (a > b) {
	  return 1;
	} else if (a < b) {

        
	  return -1;
	} else if (a === b) {
	  return 0;
	}
  }
  //console.log(newarray.sort(ordenar));

  function ordenarZA(a, b) {
	a = a.toLowerCase();
	b = b.toLowerCase(); 

  if (a > b) {
	return 1;
  } else if (a < b) {
	return -1;
  } else if (a === b) {
	return 0;
  }
}
console.log(newarray.sort(ordenarZA).reverse());