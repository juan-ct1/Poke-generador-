// pokemon en js
//objeto prototipo Pokemon
function pokemon ( fuerza, energia, vive, nombre, experiencia){
    "use strict"; 

    this.nombre      = nombre || "no definido"; //nombre del pokemon
    this.vive        = vive ||true; // estado de si el pokemon esta vivo o muerto 
    this.energia     = +energia > 0 ? +energia : 0; //cantidad de energia del pokmeon osea puntos de vida
    this.fuerza      = +fuerza || 0; // cantidad de fuerza del pokmeon 
    this.experiencia = +experiencia || 1; //grado de EXP del pokemon
}

//objeto Prototipo Entrenadort

function entrenador (nombre, pokemones) {
    "use strict"; 

    this.nombre      = nombre || "no definido"; //nombre del entrenador
    this.pokemones   = Array.isArray(pokemones) ? pokemones : []; //arreglo para los pokemones del equipo
    this.pokemones_vivos= this.pokemones.length; //pokemon del equipo vivos 
}

//creacion de los objetos de pokemon y entrenadores
p_pikachu = new pokemon("PIKACHU",100,true,25,1); //pikach
p_squirtel = new pokemon("PIKACHU",110,true,21,1); //squirtel
p_bulbasaur = new pokemon("PIKACHU",120,true,20,1); // bulbasaur
p_charmander = new pokemon("PIKACHU",100,true,23,1); // charmander

//entrenadores

juan = new entrenador("JUAN" ,[p_bulbasaur,p_pikachu]); //entrenador 1 
hugo = new entrenador("HUGO" ,[p_squirtel,p_charmander]); //entrenador 2

console.log(entrenador(juan))


