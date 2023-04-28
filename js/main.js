// generare 5 numeri e stamparli in pagina

// far partire un timer di 30 sec

// dopo i 30 sec i numeri scompaiono

// tramite prompt l'utente dovrà inserire i numeri visti uno alla volta

// infine il software deve dire quanti numeri sono  stati indovinati

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

// dichiaro le mie variabili
const numeriEl = document.querySelector(".numeri");

let num = genNum(5)
console.log(num);

