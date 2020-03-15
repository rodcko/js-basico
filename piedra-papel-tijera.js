// ********** VERSIÓN ELSE IF **********
// Declaración de variable, que va almacenar la opción de la máquina, generada aleatoriamente
var optMachine;

// Generación aleatoria de la opción de la máquina y asignación a la variable optMachine
var numRandom;
numRandom = Math.floor(Math.random() * (3-1)) + 1;

if(numRandom == 1){
    optMachine = "P" // Máquina escoge piedra
} else if (numRandom == 2){
    optMachine = "A" // Máquina escoge papel
} else {
    optMachine = "T" // Máquina escoge tijera
}

// Creación de la función, que tendrá la lógica del juego y la opción de la máquina generada aleatoriamente y dejando un "defaul else" si en dado caso e ingresara una opción no válida
function gamePiedraPapelTijera(optUser, optMachine){
    // Validación de los posibles escenarios que el usuario ganaría, e imprimiendo el mensaje de victoria del usuario
    if (optUser === "T" && optMachine === "A" || optUser === "A" && optMachine === "P" || optUser === "P" && optMachine === "T"){
        console.log("Escogiste: " + optUser + " y la máquina escogió: " + optMachine + " Felicitaciones, eres ganador :D");
    // Validación de los posibles escenarios que el usuario perdería, e imprimiendo el mensaje de victoria del usuario
    } else if (optUser === "T" && optMachine === "P" || optUser === "A" && optMachine === "T" || optUser === "P" && optMachine === "A") {
        console.log("Escogiste: " + optUser + " y la máquina escogió: " + optMachine + " Lástima, eres perdedor :(");
    // Validando el escenario en que ambos escogerían la misma opción
    } else if (optUser === optMachine){
        console.log("Escogiste: " + optUser + " y la máquina escogió: " + optMachine + " Que va, quedaron empatados! :v");
    // Default si no se ingresa una opción válida por parte del usuario
    } else {
        console.log("Oops, algo salió mal, debiste ingresar una de las opciones validas! (P, A, T)");
    }
}

// Declaración y asignación de variable, que va almacenar la opción de la persona
var optUser = prompt('Porfavor ingresa tu opcion, tomando en cuenta que: [P] = Piedra, [A] = Papel, [T] = Tijera ');

// Se transforma el texto a mayúsculas, ya que así se valida en la función
optUser = optUser.toUpperCase();

// Manda a llamar la función para que se ejecute el juego y envía como parametros las opciones de cada jugador
gamePiedraPapelTijera(optUser, optMachine);

// ********** VERSIÓN SWITCH **********







