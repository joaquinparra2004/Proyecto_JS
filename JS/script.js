//#region Variables
var bestTeam = 'Boca Juniors'; // VAR - definir variables mutables con un alcance a su funcion mas cercana
let bestStadium = "Bombonera"; // LET - definir variables mutables donde NO SE PUEDE USAR EL MISMO NOMBRE PARA OTRA VARIABLE, con un alcance a su bloque mas cercano
const bestPlayer = `Juan Roman Riquelme`; //  CONST - definir variables imutables con un alcance a su bloque mas cercano
var num1 = 10,
    num2 = 2;
//#endregion Variables
//#region  Array
let array = ['Boca Juniors', 'River', 'Independiente', 'Racing', 'San Lorenzo'];

//#endregion
//#region  Funciones
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
//#endregion
//#region  Console
console.log("El mejor equipo del mundo es: ", bestTeam);
console.log("El mejor estadio del mundo es: ", bestStadium);
console.log("El mejor jugador argetino es: ", bestPlayer);

//#endregion Console