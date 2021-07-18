async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);
  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.

  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css

  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:
  const imgSource = document.querySelector(`#imagen-pokemon-${order}`);
  imgSource.setAttribute('src', pokemonData.imagen);

  const stats = pokemonData.stats;
  cargarHabilidad(order, "hp", stats);
  cargarHabilidad(order, "ataque", stats);
  cargarHabilidad(order, "defensa", stats);
  cargarHabilidad(order, "velocidad", stats);
}

function cargarHabilidad(order, habilidad, stats) {
  const barra = document.querySelector(`#barra-${habilidad}-${order}`);
  const cantidad = document.querySelector(`#cantidad-${habilidad}-${order}`);
  const index = seleccionarHabilidad(habilidad);
  const amount = stats[index].amount;
  barra.classList.add(colorBarra(amount));
  barra.style.width = amount + "%";
  cantidad.innerText = amount + "%";
}

function seleccionarHabilidad(habilidad) {
  let index;
  switch (habilidad) {
    case "hp":
      index = 0;
      break;
    case "ataque":
      index = 1;
      break;
    case "defensa":
      index = 2;
      break;
    default:
      index = 3;
      break;
  }
  return index;
}

function colorBarra(amount) {
  let color;
  if (amount >= 70) {
    color = "verde";
  } else if (amount >= 35) {
    color = "amarillo";
  } else {
    color = "rojo";
  }
  return color;
}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});
