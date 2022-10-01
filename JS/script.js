//#region Variables
// VAR - definir variables mutables con un alcance a su funcion mas cercana
var bestTeam = 'San Lorenzo';
bestTeam = 'Boca Juniors';

// LET - definir variables mutables donde NO SE PUEDE USAR EL MISMO NOMBRE PARA OTRA VARIABLE, con un alcance a su bloque mas cercano
let bestStadium = "Carrefour";
bestStadium = "Bombonera";

//  CONST - definir variables imutables con un alcance a su bloque mas cercano
const bestPlayer = `Juan Roman Riquelme 10`;

let array = ['Boca Juniors', 'River', 'Independiente', 'Racing', 'San Lorenzo'];
//#endregion Variables

//#region  Console
console.log(bestTeam);
console.log(bestStadium);
console.log(bestPlayer);
//#endregion Console

//#region  Repetitivas 
//Recorriendo array  
for (i = 0; i < 5; i++) {
    console.log(array[i]);
}
//#endregion Repetitivas