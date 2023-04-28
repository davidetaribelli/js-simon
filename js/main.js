
// infine il software deve dire quanti numeri sono stati indovinati
// prendere i numeri scritti dall'utente e confrontarli con i numeri generati in precedenza

//FUNZIONI

// funzione per generare numeri
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);   
}
// funzione per generare dei numeri da stampare
function genNum (quantita){
    let numbers = [];

    while(numbers.length < quantita){
        let number = getRandomNumber(1,100);
        if( numbers.includes(number) == false ) {
            numbers.push(number);
        }
    }
    return numbers;
}


//funzione che nasconde i numeri
function hideNum(){
    numeriEl.innerHTML = "";
}

// funzione che genera i prompt
function inputUtente(){
    for(let i = 0; i < 5; i++){
        let numUtente = parseInt(prompt("Inserisci i numeri che ricordi uno alla volta"));
        if (isNaN(numUtente)){
            alert("devi inserire un numero");
        }
    
    }
}

// VARIABILI

// dichiaro le mie variabili
const numeriEl = document.querySelector(".numeri");
let num = genNum("5")

// DOM

//creo un paragrafo dove stampo i numeri e lo aggiungo al suo contenitore
let printNum = document.createElement("p");
printNum.innerHTML = num;
numeriEl.appendChild(printNum);

// dopo 30 secondi i numeri scompaiono grazie alla funzione dichiarata in precedenza
setTimeout(hideNum, 30 * 1000);
// dopo 32 secondi appaiono i prompt
setTimeout(inputUtente, 31 * 1000);


