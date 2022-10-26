"use strict";

let numSum = 0;

for (let i=0 ; i<10; i++) {
   numSum += Number(prompt("Inserisci un numero"));
}

alert(`La somma dei numeri è ${numSum}`);