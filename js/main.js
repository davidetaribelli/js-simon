
// infine il software deve dire quanti numeri sono stati indovinati
// prendere i numeri scritti dall'utente e confrontarli con i numeri generati in precedenza
// una volta confrontato i due fare la differenza dei numeri azzeccati con quelli generati per trovare quanti ne sono stati azzeccati e quali

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
    setTimeout(inputUtente, 1 * 1000);
}

// funzione che genera i prompt
function inputUtente(){
    let utente = []; 
    for(let i = 0; i < 5; i++){
        let numUtente = parseInt(prompt("Inserisci i numeri che ricordi uno alla volta"));
        if (isNaN(numUtente)){
            alert("devi inserire un numero");
        }
        utente.push(numUtente);

        let correctNumber = [];
        for (let i = 0; i < 5; i++) {
            if (num.includes(utente[i])) {
                correctNumber.push(utente[i]);
            }
        }
        alert("Hai indovinato " + correctNumber.length + " numeri: " + correctNumber.join(", "));
    }
}




// VARIABILI

// dichiaro le mie variabili
const numeriEl = document.querySelector(".numeri");
let num = genNum(5);
console.log("Numeri generati: ", num);
// DOM

//creo un paragrafo dove stampo i numeri e lo aggiungo al suo contenitore
let printNum = document.createElement("p");
printNum.innerHTML = num;
numeriEl.appendChild(printNum);

// dopo 3 secondi i numeri scompaiono grazie alla funzione dichiarata in precedenza
setTimeout(hideNum, 3 * 1000);










