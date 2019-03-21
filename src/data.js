const mostrarPokemones= (data) =>{
 let newarray= [];
for (let i = 0; i < data.length; i++) {
 newarray.push({name: data[i].name, type: data[i].type, img: data[i].img, weaknesses: data[i].weaknesses});
}
return newarray;
};

window.pokemon ={
  mostrarPokemones
}
