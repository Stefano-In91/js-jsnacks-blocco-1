"use strict";

const wordOne = prompt("Inserisci parola 1");
const wordTwo = prompt("Inserisci parola 2");

if (wordOne.length >= wordTwo.length) {
   alert(`${wordOne} ${wordTwo}`);
} else {
   alert(`${wordTwo} ${wordOne}`)
}