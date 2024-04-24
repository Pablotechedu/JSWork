/**
 * for...of es una estructura de bucle en JavaScript que se utiliza
 *  para iterar sobre elementos de objetos iterables como arrays, strings,
 *  maps, sets, etc. Proporciona una forma más sencilla y legible
 *  de iterar sobre estos elementos en comparación con un bucle for tradicional.
 */

let nombres = ['Juan', 'María', 'Pedro'];

for (let nombre of nombres) {
    console.log(nombre);
}




//Si necesitas el índice
for (let [indice, nombre] of nombres.entries()) {
    console.log(indice, nombre);
}

//puedes obtener lo mismo con for-of y con while
let i = 0;
while (i < nombres.length) {
    console.log("Con while",nombres[i]);
    i++;
}