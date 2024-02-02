// Snack 6:
// Calcola la somma e la media dei primi 10 numeri.


// memorizzo in una variabile la somma e la media
let sumAverage = 0;

// utilizzo un ciclo for per fare la somma dei primi 10 numeri (partendo però da 1)
for(let i = 1; i <= 10; i++) {

    sumAverage += i;

}

// stamo nel DOM la prima la somma e poi, dividendo per 10, la media
document.getElementById("result").innerHTML = `La somma dei primi 10 numeri è ${sumAverage} <br> La media dei primi 10 numeri è ${sumAverage / 10}`;
