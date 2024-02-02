// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array


// creo un array vuoto
const oddNumbers = [];

// chiedo per 6 volte all'utente di inserire un numero
for(let i = 0; i < 6; i++) {

    let userNumber = prompt(`Inserisci il ${i + 1}° numero: `);
    
    // se il numero inserito non è divisibile per due
    if(userNumber % 2 != 0) {

        // controllo se il numero inserito è già presente nel mio array
        if(!oddNumbers.includes(userNumber)) {
            // lo aggiungo al mio array
            oddNumbers.push(userNumber);
        }

    }

}

// stampo nel DOM il risultato del mio array
document.getElementById("result").innerHTML = "La lista dei numeri dispari che hai inserito è: " + oddNumbers;