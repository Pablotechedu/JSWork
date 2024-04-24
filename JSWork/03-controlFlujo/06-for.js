let i = 0;
while (i < 10) {
    if(i % 2 == 0){
        console.log(i, 'Es un número par');
    }
    i++;
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 1; i <= 5; ++i) { // ¿Por qué puedo volver a inicializar i?
    console.log(i);
}

let j; // Declaración de la variable fuera del ciclo for

for (j = 1; i <= 5; i++) {
    console.log(j);
}

console.log("Fuera del ciclo, j tiene el valor de: " + j);

//while vs. for
let continuar = true;
while (continuar) {
    let respuesta = prompt("¿Quieres continuar? (si/no)");//while necesita que un valor cambie
    if (respuesta === "no") {
        continuar = false;
    }
}