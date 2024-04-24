let mapa = new Map();

// Agregar elementos al Map
mapa.set('a', 1);
mapa.set('b', 2);
mapa.set('c', 3);

// Acceder a un valor utilizando la clave
console.log(mapa.get('a')); // Imprime: 1

// Iterar sobre los elementos del Map en el orden de inserción
for (let [clave, valor] of mapa) {
    console.log(`${clave} = ${valor}`);
}


// Imprime:
// a = 1
// b = 2
// c = 3
let valorB = mapa.get('b');
console.log(valorB);

let mapaDos = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

console.log(mapaDos.get('a')); // Imprime: 1
console.log(mapaDos.get('b')); // Imprime: 2
console.log(mapaDos.get('c')); // Imprime: 3

let mapaTres = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// Utilizando un bucle for...of
for (let [clave, valor] of mapaTres) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}

// Utilizando forEach
mapaTres.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});

