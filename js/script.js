/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che 
ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
indovinare sono stati individuati. 
*/

//  creare 5 numeri random e metterli in un array
const randArray = generateRandomArray(5, 0, 100);
console.log(randArray);

// visualizzare i numeri in pagina per 30 secondi
//seleziono l'elemento con id text dell'html
const textBox = document.querySelector('#text');
console.log(text);

// dopo i 30 secondi i numeri scompaiono
// partendo a contare da 30
// viene decrementato il numero di 1 ogni secondo
// quando il numero arriva a 0, i numeri scompaiono
let timer = 3;
const clock = setInterval(function() {
    timer--;
    console.log(timer);
    textBox.innerHTML = randArray;
    if(timer < 0) {
        
        // quando il numero arriva a 0, i numeri scompaiono
        textBox.innerHTML = '';
        
        
        // chiedo con il prompt all'utente 5 numeri 
        // creo un array di numeri corretti(quelli indovinati dall'utente)
        const numbersFound = [];
        if(timer == -2){
            clearInterval(clock);
            for(let i = 0; i < 5; i++) {
                let userNumber = parseInt(prompt('Dammi un numero da 1 a 100 che hai visto nello schermo'));
                console.log('userNumber',userNumber);
                // per ogni numero dato dall'utente lo aggiungo ad un array di numeri corretti se presente 
                //nell'array dei numeri random
                if(randArray.includes(userNumber)) {
                    numbersFound.push(userNumber);
                    console.log(numbersFound)
                }

            }
            // dico all'utente quanti e quali numeri da individuare sono stati individuati
            textBox.innerHTML = `Hai indovinato ${numbersFound.length} numeri. I numeri indovinati sono ${numbersFound}`;
        }
    }
},1000);

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