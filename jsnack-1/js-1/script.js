// Snack 1:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci la prima parola: ");

const secondWord = prompt("Inserisci la prima seconda: ");

if(firstWord.length < secondWord.length) {

    document.getElementById("result").innerHTML = `parola più corta: [${firstWord}] <br> parola più lunga: [${secondWord}]`;

} else if(firstWord.length > secondWord.length){

    document.getElementById("result").innerHTML = `parola più corta: [${secondWord}] <br> parola più lunga: [${firstWord}]`;

} else {
    document.getElementById("result").innerHTML = `Le parole: [${firstWord}], [${secondWord}] <br> hanno la stessa lunghezza`;
}