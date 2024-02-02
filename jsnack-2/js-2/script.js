// Snack 2:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// memorizzo la variabile per la somma
let sum = 0;

// chiedo all'utente per 10 volte di inserire un numero utilizzando un ciclo for
for(let i = 0; i < 10; i++) {

    let userNumber = prompt(`Inserisci il ${i + 1}° numero:`);

    sum += Number(userNumber);

}

document.getElementById("result").innerHTML = "La somma dei numeri che hai inserito è: " + sum;