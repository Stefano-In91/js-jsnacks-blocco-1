"use strict";

// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const numbs = [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   10
]
let sum = 0;
for (let i = 0; i < numbs.length; i++) {
   if (i % 2 != 0) {
      console.log(`posizione ${i} numero ${numbs[i]} sommato`);
      sum += numbs[i];
   }
}
console.log(`somma totale posizioni dispari ${sum}`);
alert(`somma totale posizioni dispari ${sum}`);