/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che 
ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
indovinare sono stati individuati. 
*/

//  creare 5 numeri random e metterli in un array
const randArray = generateRandomArray(5, 0, 100);
console.log(randArray)
// visualizzare i numeri in pagina per 30 secondi

// dopo i 30 secondi i numeri scompaiono

// chiedo con il prompt all'utente 5 numeri e li salvo in un array

// confronto i 5 numeri dati dall'utente con i numeri random

// dico all'utente quanti e quali numeri da individuare sono stati individuati






// FUNCTIONS

// Genera un array di arrayLength numeri random
// arrayLength -> numero intero che definisce la lunghezza dell'array tornato
// numMin -> numero intero minimo da generare
// numMax -> numero intero massimo da generare
// return: un array di arrayLength numeri random
function generateRandomArray(arrayLength, numMin, numMax) {
    // Creiamo un array vuoto
    const randomNumbersArray = [];

    // finche non ci sono arrayLength numeri nell'array:
    while(randomNumbersArray.length < arrayLength) {
        // genero un numero random
        const randNumber = getRndInteger(numMin, numMax);
        // se il numero random non esiste nell'array lo pusho
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    
    return randomNumbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}