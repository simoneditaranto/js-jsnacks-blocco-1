// Snack 5:
// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.


// chiedo all'utente di quanti numeri vuole sapere il cuboc
const userChoice = prompt("Di quanti dei primi N numeri vuoi sapere il cubo?");

// controllo se l'utente ha inserito un numero
if(isNaN(userChoice) || userChoice <= 0) {

    document.getElementById("result").innerHTML = "Non hai inserito un valore corretto, ricarica la pagina per riprovare";

} else {

    document.getElementById("result").innerText = `Il cubo dei primi ${userChoice} numeri è: `;
    
    // utilizzo un ciclo for che fa un numero di iterazioni pari a userChoice e ad ogni iterazione calcolo e scrivo il valore di i al cubo
    for(let i = 0; i < userChoice; i++) {
    
        document.getElementById("result").innerText += " " + i * i * i; 
    
    }

}
