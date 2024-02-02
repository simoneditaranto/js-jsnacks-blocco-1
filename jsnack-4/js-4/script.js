// Snack 4:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.


// chiedo all'utente di inserire un numero di 4 cifre
const number = prompt("Inserisic un numero a 4 cifre:");

if(number.length != 4) {

    document.getElementById("result").innerHTML = `Valore inserito non corretto, devi inserire un numero a 4 cifre, ricarica la pagina per inserire nuovamente il numero`;

} else {

    // creo una variabile per la somma delle cifre
    let sum = 0;
    
    // utilizzo un ciclo for per scorrere le cifre del numero inserito
    for(let i = 0; i < number.length; i++) {
    
        // utilizzo il metodo charAt con la proprietà Number che mi restituisce il valore del carattere in una determinata posizione 
        sum += Number(number.charAt(i));
    
    }
    
    document.getElementById("result").innerHTML = `Hai inserito il numero ${number}, <br> La somma delle sue cifre è di: ${sum}`;

}
