// primero: probarlo con = 0 , segundo con = 10, tercero = 12, 
//****junto con do-while***

let iWhile = 12;                  
while (iWhile < 10) {
    if (iWhile % 2 == 0) {
        console.log('Número par (while)', iWhile);
    }
    iWhile++;
}

console.log('Fuera del while');

let iDoWhile = 12;
do { // Se ejecuta al menos una vez
    if (iDoWhile % 2 == 0) {
        console.log('Número par (do - while)', iDoWhile);
    }
    iDoWhile++;
}
while (iDoWhile < 10);