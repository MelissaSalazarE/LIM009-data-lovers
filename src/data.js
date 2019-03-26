const mostrarPokemones=(data)=>{
    let arrayMostrar =[];
    for (let i = 0; i < data.length; i++) {
        arrayMostrar.push({name:data[i].name, img:data[i].img, type:data[i].type, weaknesses:data[i].weaknesses})  
    }
    return arrayMostrar;
};


window.pokemon={
    mostrarPokemones
}